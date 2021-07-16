module.exports = {
  title: 'Sendi UI',
  description: '圣鼎 ui，基于 element-ui 2.x 封装的业务型组件',
  extraWatchFiles: ['../src/'],
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/component/pagination' },
      { text: '其他', link: '/others/docsify' }
    ],
    sidebar: {
      '/guide/': [
        {
          title: '指南',
          children: ['install']
        }
      ],
      '/component/': [
        {
          title: '组件',
          children: ['pagination', 'state-tag']
        }
      ],
      '/others/': [
        {
          title: '其他',
          children: ['docsify', 'private-package']
        }
      ]
    }
  }
}
