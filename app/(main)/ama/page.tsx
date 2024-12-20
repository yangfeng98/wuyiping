import Image from 'next/image'
import Balancer from 'react-wrap-balancer'

// import { RichLink } from '~/components/links/RichLink'
import { Container } from '~/components/ui/Container'

import exhibition04 from './exhibition04.jpg'
import exhibition02 from './exhibition02.jpg'
import exhibition03 from './exhibition03.jpg'
import Factory01 from './Factory (1).jpg'
import Factory02 from './Factory (2).jpg'
import Patent01 from './Patent (1).jpg'
import Patent02 from './Patent (2).jpg'
import Patent03 from './Patent (3).jpg'
import Patent04 from './Patent (4).jpg'
import Patent05 from './Patent (5).jpg'
import Patent06 from './Patent (6).jpg'
import Patent07 from './Patent (7).jpg'
import Patent08 from './Patent (8).jpg'
import Patent09 from './Patent (9).jpg'
import Patent10 from './Patent (10).jpg'
import Patent11 from './Patent (11).jpg'
import Patent12 from './Patent (12).jpg'
// import ThankYouLetterScreenshot1 from './Arc aagD26w9@2x.png'
// import ThankYouLetterScreenshot2 from './Arc ynleUdHy@2x.png'

const title = 'About us | DAQIN'
const description =
  // '最近的目标是带爷爷奶奶来北京旅游'
  'DAQIN was established in 2002 Beijing, China and the main business line is custom mobile phone cases project. There are currently over 3000 franchisees. We have been expanding overseas business since 2006. Custom mobile phone cases machine has been selling well in over 135 countries, certified by SGS and the ministry of commerce of the People’s Republic of China franchise brand, in the same time it also has acquired over 20 patents for innovation and over 50 registered trademarks.'

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
  },
}

export default function AskMeAnythingPage() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
        About DAQIN
        </h1>
        <div className="my-6 text-base text-zinc-600 dark:text-zinc-400">
          <Balancer>{description}
          <p>The 1st business school of custom mobile phone cases in the world was established in 2015 by DAQIN. It has bring great influence on the people who love customized mobile phone decorations and business creators.</p>
          </Balancer>
        </div>
      </header>
     
      

      <article className="prose dark:prose-invert">
         <div className='OurExhibitions '>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
                Our Exhibitions
            </h1> 
            <Balancer>DAQIN professional in custom mobile phone skin software and machine, sell well in 135 countries
since 2002, has 3000 franchisees all over the world!</Balancer>
            <div className="grid items-center gap-4 lg:grid-cols-3">
          <Image height={330} className="max-w-full" src={exhibition03} alt="hongkong 2024 exhibition"  />
          <Image height={330} className="max-w-full" src={exhibition02} alt="hongkong 2024 exhibition"  />
          <Image height={330} className="max-w-full" src={exhibition04} alt="hongkong 2024 exhibition"  />
        </div>
      </div>
       <div className='OurFactory'>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
              Our Factory
            </h1>
            <Balancer>Craftsmanship and quality first! We adhere to strict quality control processes,
               meticulously overseeing every step from raw material selection to final inspection. 
               Choose us for reliable products that meet the highest standards.</Balancer>
            <div className="grid items-center gap-4 lg:grid-cols-2">
            <Image  height={500} className="max-w-full" src={Factory01} alt="hongkong 2024 exhibition"  />
              <Image  height={500} className="max-w-full" src={Factory02} alt="hongkong 2024 exhibition"  />
           
            </div>
       </div>
       <div className='OurHonor'>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
                Our Honor
                </h1>
                <Balancer>National patent, advanced technology, focus on 19 years. With 30+ national patents,
                   the 1st custom mobile phone skin design software was born in 2002.
                    19 years optimizing, Worthy of Trust !</Balancer>
                <div className="grid items-center gap-4 lg:grid-cols-4">
                <Image  height={470} className="max-w-full" src={Patent01} alt="hongkong 2024 exhibition"  />
                  <Image  height={470} className="max-w-full" src={Patent02} alt="hongkong 2024 exhibition"  />
                  <Image  height={470} className="max-w-full" src={Patent03} alt="hongkong 2024 exhibition"  />
                  <Image  height={470} className="max-w-full" src={Patent04} alt="hongkong 2024 exhibition"  />
                  <Image  height={470} className="max-w-full" src={Patent05} alt="hongkong 2024 exhibition"  />
                  <Image  height={470} className="max-w-full" src={Patent06} alt="hongkong 2024 exhibition"  />
                  <Image  height={470} className="max-w-full" src={Patent07} alt="hongkong 2024 exhibition"  />
                  <Image  height={470} className="max-w-full" src={Patent08} alt="hongkong 2024 exhibition"  />
                  <Image  height={470} className="max-w-full" src={Patent09} alt="hongkong 2024 exhibition"  />
                  <Image  height={470} className="max-w-full" src={Patent10} alt="hongkong 2024 exhibition"  />
                  <Image  height={470} className="max-w-full" src={Patent11} alt="hongkong 2024 exhibition"  />
                  <Image  height={470} className="max-w-full" src={Patent12} alt="hongkong 2024 exhibition"  />
                </div>
       </div>
       
        
              
      </article>

      
      {/* <article className="prose dark:prose-invert">
        <h2>咨询内容</h2>
        <p>我可以为你解答以下相关的问题：</p>
        <ul>
          <li>
            <b>前端/全栈开发</b>
            ：工作难找，或是寻求职场建议？想提升自己的工程师水平？还是想锐评
            React vs Vue？
          </li>
          <li>
            <b>UI/UX 设计</b>：不知道如何开始学习设计？想提升自己的设计水平？
          </li>
          <li>
            <b>创业经验</b>
            ：我是
            <RichLink href="https://zolplay.com" target="_blank">
              佐玩
            </RichLink>
            的创始人，现在带领着团队帮助游戏开发者打造协同平台。
          </li>
          <li>
            <b>英语技能</b>：英语能力不足，想提高自己的英语水平？想跟 Cali
            一样可以{' '}
            <RichLink
              href="https://y.qq.com/n/ryqq/songDetail/003c0O9B3firAU"
              favicon={false}
              target="_blank"
            >
              英文说唱
            </RichLink>
            ？
          </li>
          <li>
            <b>其他</b>
            ：我的美国留学与工作经验，内容创作，音乐制作经验等等都可以帮助你解答一些其他的问题。
          </li>
        </ul>
        <p>
          你也可以全程跟我用英语聊，我也非常乐意，因为可能我的英语比中文说的要好。。。
        </p>

        <h2>定价</h2>
        <p>我的一对一咨询的价格为：</p>
        <ul>
          <li>
            <strong>¥150 - 30分钟</strong>
          </li>
          <li>
            <strong>¥300 - 60分钟</strong>
          </li>
        </ul>

        <p className="flex justify-center md:block md:justify-start">
          <span className="inline-flex flex-col items-center">
            <Image src={AlipayQR} alt="" className="w-44 dark:brightness-90" />
            <span className="mt-1 text-sm font-medium">支付宝二维码</span>
          </span>
        </p>
        <p>
          一旦你完成支付，通过{' '}
          <RichLink
            href="https://cal.com/calicastle/ask-me-anything"
            target="_blank"
          >
            这个链接
          </RichLink>
          来跟我预约一个合适你的时间。
        </p>

        <h2>感谢信</h2>
        <p>
          下面两个截图摘选自两名 Twitter
          朋友的私信，能够帮助到更多的人一直是我的使命：
        </p>
        <p className="grid items-center gap-4 lg:grid-cols-2">
          <Image
            src={ThankYouLetterScreenshot1}
            alt=""
            className="max-w-full"
          />
          <Image
            src={ThankYouLetterScreenshot2}
            alt=""
            className="max-w-full"
          />
        </p>
      </article> */}
    </Container>
  )
}
