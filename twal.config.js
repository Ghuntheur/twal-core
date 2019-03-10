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
  }
};
