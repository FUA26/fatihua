/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'FatihUA',
  author: 'Fatih Ulil Albab',
  headerTitle: 'FatihUA',
  description: 'A blog created with Next.js,Tailwind.css and Contentleyer',
  language: 'en-us',
  theme: 'system',
  siteUrl: 'https://tailwind-nextjs-starter-blog.vercel.app',
  siteRepo: 'https://github.com/timlrx/tailwind-nextjs-starter-blog',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  email: 'fatihua@gmail.com',
  github: 'https://github.com',
  x: 'https://twitter.com/x',
  facebook: 'https://facebook.com',
  youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com',
  instagram: 'https://www.instagram.com',
  medium: 'https://medium.com',
  locale: 'en-US',
  stickyNav: false,
  
  search: {
    provider: 'kbar',    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`, 
    },
  },
}

module.exports = siteMetadata
