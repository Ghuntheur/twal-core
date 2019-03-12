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
    backgroundImage: 'imgs/chateau.jpg'
    // timeout: 4,
    // unit: 's'
  },
  routing: {
    useRoot: false,
    linksNamespace: 'nav',
    routes: [
      { component: 'Remaining', i18nKey: 'remaining', default: true },
      { component: 'History', i18nKey: 'history' },
      { component: 'Rooms', i18nKey: 'rooms' }
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
