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
    enabled: true,
    openNavOnUnmount: true,
    backgroundImage: '',
    timeout: 4,
    unit: 's'
  },
  routing: {
    useRoot: true,
    rootComponent: '/components/Home',
    linksNamespace: 'nav',
    routes: [
<<<<<<< twal.config.js
      { component: 'Remaining', i18nKey: 'remaining' },
      { component: 'History', i18nKey: 'history' },
      { component: 'Rooms', i18nKey: 'rooms', default: true }
=======
      { component: 'Remaining', contentKey: 'hello', default: true },
      { component: 'History', contentKey: 'history' },
      { component: 'Ui', contentKey: 'ui' }
>>>>>>> twal.config.js
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
