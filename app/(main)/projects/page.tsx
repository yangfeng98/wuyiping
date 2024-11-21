import { type Metadata } from 'next'

import { Projects } from '~/app/(main)/projects/Projects'
import { Container } from '~/components/ui/Container'

const title = '我的项目'
const description =
  '多年来，我一直在做各种各样的小项目，这里就是我筛选出来我觉得还不错的项目合集，也是我在技术领域中尝试和探索的最好见证。'
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
} satisfies Metadata

export default function ProjectsPage() {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
        DAQIN&apos;s partner.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          {/* 多年来，我一直在做各种各样的小项目，有<b>开源</b>的，有<b>实验</b>
          的，也有 <b>just for fun </b>
          的，下面就是我筛选出来我觉得还不错的项目合集，也是我在技术领域中尝试和探索的最好见证。 */}
          DAQIN has been established for <b>22</b>  years and is a <b>leader</b> and <b>rule-maker</b> in the 
          standardization of mobile phone accessories in China. These are the companies 
          we have partnered with, and they are the best testament to our success in the 
          mobile phone industry.
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        <Projects />
      </div>
    </Container>
  )
}

export const revalidate = 3600
