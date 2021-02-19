const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000' : 'https://devs-news-acg.galbeiroc.vercel.app'
