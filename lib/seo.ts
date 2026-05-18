export const seo = {
  title: 'Bingjia Yang | Full Stack Developer',
  description:
    'Bingjia Yang (羊炳嘉, ybj)，全栈开发者，UNSW硕士，专注于Web开发、React、Next.js、Node.js。个人博客与作品集，分享技术、生活与成长经历。Full Stack Developer, Portfolio, Blog, UNSW, Australia, Sydney.',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://ybj.au'
      : 'http://localhost:3000'
  ),
} as const
