export const seo = {
  title: 'Bingjia Yang | 羊炳嘉 | ybj | Full Stack Developer | UNSW | 博客 | Portfolio | 前端 | React | Next.js | 个人主页 | 技术博客 | Australia | Sydney',
  description:
    'Bingjia Yang (羊炳嘉, ybj)，全栈开发者，UNSW硕士，专注于Web开发、React、Next.js、Node.js。个人博客与作品集，分享技术、生活与成长经历。Full Stack Developer, Portfolio, Blog, UNSW, Australia, Sydney.',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://ybj.au'
      : 'http://localhost:3000'
  ),
} as const
