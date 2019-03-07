module.exports = {
  i18n: {
    availableLanguages: ['fr', 'en'],
    defaultLanguage: 'fr',
    namespaces: []
  },
  screenSaver: {
    enabled: false,
    options: {
      timeout: 4,
      unit: 's'
    }
  },
  routes: [
    { component: 'Remaining', contentKey: 'hello', default: true },
    { component: 'History', contentKey: 'history' },
    { component: 'Rooms', contentKey: 'rooms' }
  ]
};
