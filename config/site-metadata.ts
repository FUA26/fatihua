export const SITE_METADATA = {
  title: `Fatih's personal blog`,
  author: 'Fatih Ulil ALbab',
  headerTitle: `Fatih's Blog`,
  description:
    'A personal space of mager programmer.',
  language: 'en-us',
  theme: 'system', 
  siteUrl: 'https://www.fatihua.my.id',
  siteRepo: 'https://github.com/FUA26/fatihua',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  email: 'fatihua@gmail.com',
  github: 'https://github.com/FUA26',
  x: 'https://x.com/ascodenote',
  facebook: 'https://facebook.com/fatihua',
  youtube: 'https://www.youtube.com/ascodenote',
  linkedin: 'https://www.linkedin.com/in/fatihua',
  instagram: 'https://www.instagram.com/fatihulil',
  locale: 'en-US',
  stickyNav: true,
  search: {
    kbarConfigs: {
      // path to load documents to search
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
}
