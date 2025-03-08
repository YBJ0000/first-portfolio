// import Image from 'next/image'
import Balancer from 'react-wrap-balancer'

// import { RichLink } from '~/components/links/RichLink'
import { Container } from '~/components/ui/Container'

// import AlipayQR from './alipay-qr.jpg'
// import ThankYouLetterScreenshot1 from './Arc aagD26w9@2x.png'
// import ThankYouLetterScreenshot2 from './Arc ynleUdHy@2x.png'

const title = 'About Me'
const description =
  "👋 Hi, I am Bingjia! A basketball lover, music enthusiast, and curious explorer of the world. While I spend a lot of time building things on the web, life is about more than just coding. I believe in teamwork, creativity, and the joy of discovering new experiences."

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
          {title}
        </h1>
        <p className="my-6 text-base text-zinc-600 dark:text-zinc-400">
          <Balancer>{description}</Balancer>
        </p>
      </header>

      <article className="prose dark:prose-invert">
        <h2>About Me</h2>
        <p>A glimpse into my passions and interests beyond coding:</p>
        <ul>
          <li>
            <b>🏀 Basketball</b>: Basketball has been a part of my life for as long as I can remember. 
            From casual street games to winning a university intramural championship, I love the thrill of competition and the teamwork it fosters.
          </li>
          <li>
            <b>🎸 Music</b>: I play the guitar and have performed at various university events. 
            Music is my creative escape, whether it's jamming with friends or just strumming melodies on my own.
          </li>
          <li>
            <b>🌍 Travel</b>: Exploring new places, cultures, and foods is something I truly enjoy. 
            Every journey is a chance to see the world through a different lens and collect unforgettable memories.
          </li>
          <li>
            <b>☕ Coffee & Conversations</b>: I love deep conversations over a good cup of coffee. 
            Whether it is about life, experiences, or random musings, I believe that great ideas often spark from simple talks.
          </li>
        </ul>

        <h2>Let's Connect</h2>
        <p>
          If any of this resonates with you, feel free to reach out! 
          I am always happy to connect and share experiences.
        </p>
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
