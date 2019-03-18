module.exports = {
  name: 'TWAL',
  description: 'twal framework',
  i18n: {
    availableLanguages: ['fr', 'en'],
    defaultLanguage: 'fr',
    namespaces: ['nav', 'rooms'],
    useCountriesFlag: true
  },
  screenSaver: {
    enabled: false,
    openNavOnUnmount: true,
    backgroundImage: '',
    timeout: 4,
    unit: 's'
  },
  routing: {
    useRoot: true,
    linksNamespace: 'nav',
    routes: [
      { component: 'Remaining' },
      { component: 'History' },
      { component: 'Rooms', default: true }
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
