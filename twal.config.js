module.exports = {
  name: 'TWAL',
  description: 'twal framework',
  i18n: {
    availableLanguages: ['fr'],
    defaultLanguage: 'fr',
    namespaces: ['nav-links', 'museum-links', 'museum-content']
  },
  routing: {
    linksNamespace: 'nav-links',
    routes: [{ component: 'Museum', default: true }]
  },
  build: {
    author: {
      name: 'Twal team',
      email: 'twal.framework@gmail.com',
      website: 'https://twal.gitbook.io'
    },
    folderName: 'cordova',
    id: 'io.twal.demo',
    FullScreen: false,
    orientation: 'landscape',
    platforms: [{ name: 'android', spec: '@7.1.4' }, { name: 'browser', spec: '@latest' }]
  }
};
