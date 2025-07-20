import './globals.css'
import './clerk.css'
import './prism.css'

import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata, Viewport } from 'next'

import { ThemeProvider } from '~/app/(main)/ThemeProvider'
import { url } from '~/lib'
import { sansFont } from '~/lib/font'
import { seo } from '~/lib/seo'

import VantaBackgroundSwitcher from "../components/VantaBackgroundSwitcher";

export const metadata: Metadata = {
  metadataBase: seo.url,
  title: {
    template: '%s | Bingjia Yang',
    default: seo.title,
  },
  description: seo.description,
  keywords: 'Bingjia Yang,羊炳嘉,ybj,Full Stack Developer,UNSW,Portfolio,博客,前端,React,Next.js,个人主页,技术博客,Australia,Sydney',
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: {
      default: seo.title,
      template: '%s | Bingjia Yang',
    },
    description: seo.description,
    siteName: 'Bingjia Yang',
    locale: 'zh_CN',
    type: 'website',
    url: 'https://www.ybj.au',
  },
  alternates: {
    canonical: url('/'),
    types: {
      'application/rss+xml': [{ url: 'rss', title: 'RSS 订阅' }],
    },
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000212' },
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={`${sansFont.variable} m-0 h-full p-0 font-sans antialiased`}
        suppressHydrationWarning
      >
        <body className="flex h-full flex-col">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <VantaBackgroundSwitcher />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
