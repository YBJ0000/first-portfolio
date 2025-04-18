export const seo = {
  title: 'Bingjia Yang | Developer/Designer/DevOps/Debugger',
  description:
    'I am a highly adaptable Full Stack Developer with experience building scalable web apps using modern frameworks and cloud tools like React, Next.js, Node.js, Docker, and AWS EC2. I enjoy working across both frontend and backend, and I thrive in cross-functional teams where I can solve real-world problems with clean, scalable code.',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://ybj.au'
      : 'http://localhost:3000'
  ),
} as const
