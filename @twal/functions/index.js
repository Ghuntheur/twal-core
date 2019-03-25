import twalConfig from '@root/twal.config';
import i18n from '@twal/config/i18n.config';

export const getLanguages = () => i18n.languages;
export const getCurrentLanguage = () => i18n.language;
export const getI18nConfig = () => i18n;
export const getConfiguration = () => twalConfig;
export const getRoutes = () =>
  twalConfig.routing.routes.map(
    route => `/${(route.path ? route.path.replace(/^\//, '') : route.component).toLowerCase()}`
  );
