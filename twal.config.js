module.exports = {
  name: 'TWAL',
  description: 'twal framework',
  i18n: {
    availableLanguages: ['fr', 'en'],
    defaultLanguage: 'fr',
    namespaces: ['nav'],
    useCountriesFlag: true
  },
  screenSaver: {
    enabled: false,
    openNavOnUnmount: true,
    backgroundImage: 'imgs/made-with-twal.png',
    timeout: 4,
    unit: 's'
  },
  routing: {
    useRoot: false,
    linksNamespace: 'nav',
    routes: [
      { component: 'Remaining', contentKey: 'hello', default: true },
      { component: 'History', contentKey: 'history' },
      { component: 'Ui', contentKey: 'ui' }
    ]
  },
  navigation: {
    buttonsSimultaneity: false,
    showLanguages: true
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
