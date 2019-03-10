module.exports = {
  i18n: {
    availableLanguages: ['fr', 'en'],
    defaultLanguage: 'fr',
    namespaces: [],
    useCountriesFlag: true
  },
  screenSaver: {
    enabled: false,
    options: {
      timeout: 4,
      unit: 's'
    }
  },
  routing: {
    useRoot: true,
    routes: [
      { component: 'Remaining', contentKey: 'hello', default: true },
      { component: 'History', contentKey: 'history' },
      { component: 'Rooms', contentKey: 'rooms' }
    ]
  },
  name: 'TWAL',
  description: 'twal framework',
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
