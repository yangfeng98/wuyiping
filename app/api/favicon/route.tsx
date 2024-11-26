// 导入必要的模块
import * as cheerio from 'cheerio' // 用于解析 HTML 和提取信息。
import { ImageResponse } from 'next/og' // 用于在 Next.js 中生成图片响应。
import { type NextRequest, NextResponse } from 'next/server' // 用于处理 Next.js API 路由中的请求和响应。

// 导入速率限制和 Redis 工具。
import { ratelimit, redis } from '~/lib/redis'

// 定义运行时环境和缓存过期时间。
export const runtime = 'edge' // 指定为边缘计算运行时，以便更快的处理。
export const revalidate = 259200 // 3天，表示缓存过期的时间，单位为秒。

function getKey(url: string) {
  // 帮助函数，根据 URL 生成 Redis 键值。
  return `favicon:${url}`
}

// 预定义的域名和自定义 favicon URL 的映射关系。
const faviconMapper: { [key: string]: string } = {
  '((?:zolplay.cn)|(?:zolplay.com)|(?:cn.zolplay.com))': 'https://cali.so/favicons/zolplay.png',
  '(?:github.com)': 'https://cali.so/favicons/github.png',
  '((?:t.co)|(?:twitter.com)|(?:x.com))': 'https://cali.so/favicons/twitter.png',
  'coolshell.cn': 'https://cali.so/favicons/coolshell.png',
  'vercel.com': 'https://cali.so/favicons/vercel.png',
  'nextjs.org': 'https://cali.so/favicons/nextjs.png',
}

// 函数：根据 URL 获取预定义的图标，如果有的话。
function getPredefinedIconForUrl(url: string): string | undefined {
  // 遍历映射关系中的每个正则表达式，检查 URL 是否匹配。
  for (const regexStr in faviconMapper) {
    const regex = new RegExp(
      `^(?:https?:\/\/)?(?:[^@/\\n]+@)?(?:www.)?` + regexStr
    )
    if (regex.test(url)) {
      return faviconMapper[regexStr] // 返回对应的图标 URL。
    }
  }

  return undefined // 如果没有找到预定义的图标，返回 undefined。
}

// 图标的宽高设置
const width = 32
const height = width

// 函数：根据 URL 渲染图标
function renderFavicon(url: string) {
  return new ImageResponse(
    (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={url} alt={`${url} 的图标`} width={width} height={height} />
    ),
    {
      width, // 图标宽度
      height, // 图标高度
    }
  )
}

// GET 请求的处理函数
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url) // 从请求 URL 获取查询参数。
  const url = searchParams.get('url') // 获取查询参数中的 URL。

  if (!url) {
    return NextResponse.error() // 如果没有提供 URL，返回错误响应。
  }

  // 执行速率限制
  const { success } = await ratelimit.limit('favicon' + `_${req.ip ?? ''}`)
  if (!success) {
    return NextResponse.error() // 如果超过速率限制，返回错误响应。
  }

  let iconUrl = 'https://cali.so/favicon_blank.png' // 默认的空白图标。

  try {
    const predefinedIcon = getPredefinedIconForUrl(url) // 尝试获取预定义的图标。
    if (predefinedIcon) {
      return renderFavicon(predefinedIcon) // 如果有预定义图标，返回它。
    }

    // 从 Redis 缓存中获取图标 URL（如果存在）。
    const cachedFavicon = await redis.get<string>(getKey(url))
    if (cachedFavicon) {
      return renderFavicon(cachedFavicon) // 如果缓存中有图标，返回它。
    }

    // 如果没有缓存图标，则从 URL 请求获取网页内容。
    const res = await fetch(new URL(`https://${url}`).href, {
      headers: {
        'Content-Type': 'text/html',
      },
      cache: 'force-cache', // 强制缓存请求结果。
    })

    if (res.ok) {
      const html = await res.text() // 获取 HTML 内容。
      const $ = cheerio.load(html) // 使用 cheerio 解析 HTML。
      // 尝试获取不同的图标链接（如 apple-touch-icon、icon 或 shortcut icon）。
      const appleTouchIcon = $('link[rel="apple-touch-icon"]').attr('href')
      const favicon = $('link[rel="icon"]').attr('href')
      const shortcutFavicon = $('link[rel="shortcut icon"]').attr('href')
      const finalFavicon = appleTouchIcon ?? favicon ?? shortcutFavicon
      if (finalFavicon) {
        iconUrl = new URL(finalFavicon, new URL(`https://${url}`).href).href // 构造完整的图标 URL。
      }
    }

    // 将获取到的图标 URL 存入 Redis 缓存。
    await redis.set(getKey(url), iconUrl, { ex: revalidate })

    return renderFavicon(iconUrl) // 返回渲染的图标。
  } catch (e) {
    console.error(e) // 捕获错误并打印日志。
  }

  // 如果出现错误，仍然设置缓存并返回默认图标。
  await redis.set(getKey(url), iconUrl, { ex: revalidate })

  return renderFavicon(iconUrl) // 返回默认图标。
}
