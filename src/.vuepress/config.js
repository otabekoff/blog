module.exports = {
  title: 'Otabek Sadiridinov',
  description: '💥 Blog, Shaxsiy va rasmiy blog',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', type: 'image/png' }],
  ],
  dest: "docs",
  base: '/',
  markdown: {
    lineNumbers: true
  },
  theme: 'blog-vuetify',
  themeConfig: {
    globalPagination: {
      lengthPerPage: 3,
    },
    titleIcon: 'pencil-box-outline',
    sidebar: {
      profile: {
        avatarUrl: 'https://avatars.githubusercontent.com/u/60849894?s=100',
        name: 'Otabek Sadiridinov',
        subTitle: 'Web Programmer & Web designer',
        descriptionHtml: 'I know VueJS(Vuetify, Quasar, BootstrapVue, MintUI, UIKit) together with web basics(HTML, CSS, JS) and etc.',
      },
      additionalBlocks: [
        {
          title: 'Pages',
          links: [
            { label: 'PROFILE', path: '/profile' },
          ],
        },
      ],
    },
    footer: {
      links: [
        { label: 'PROFILE', path: '/profile' },
      ],
    },
    sns: {
      telegram: 'https://t.me/otabek_mirzo',
      github: 'https://github.com/OtabekSadiridinov',
      feed: '',
    },
    seo: {
      baseUrl: 'https://otabeksadiridinov.github.io',
      author: 'https://t.me/otabek_mirzo',
      image: 'https://tva1.sinaimg.cn/large/007S8ZIlgy1gece2yx70lj30zk0nnq7z.jpg',
      fbAppId: '',
      // 186549258503363
      twitterSite: '@',
      twitterCreator: '@',
      articleDirectoryNames: [
        '_posts',
        '_pages',
      ],
    },
    ga: 'UA-156973649-4',
    summary: 300,
    dateFormat: 'YYYY/MM/DD',
    components: {
      afterFooter: 'MyAfterFooter',
    },
  },
  plugins: [
    'redirect-frontmatter',
    '@vuepress/back-to-top',
    'vuepress-plugin-smooth-scroll',
    [
      'vuepress-plugin-medium-zoom',
      {
        selector: '.my-wrapper .my-img ',
        delay: 1000,
        options: {
          margin: 24,
          background: '#BADA55',
          scrollOffset: 0,
        },
      },
    ],

    [
      'vuepress-plugin-container',
      {
        type: 'inform',
        before: inform =>
          `<div class="custom-block inform"><p class="custom-block-title">${inform}</p>`,
        after: '</div>'
      }
    ]
  ],
}
