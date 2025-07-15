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
            <b>🎸 Music</b>: {`I play the guitar and have performed at various university events. 
            Music is my creative escape, whether it's jamming with friends or just strumming melodies on my own.`}
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

        <h2>{`Let's Connect`}</h2>
        <p>
          {`If any of this resonates with you, feel free to reach out! 
          I am always happy to connect and share experiences.`}
        </p>
      </article>



    </Container>
  )
}
