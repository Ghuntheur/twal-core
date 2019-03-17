export const isDev = () => process.env.NODE_ENV === 'development';
export const isProd = () => process.env.NODE_ENV === 'production';
export const throwError = (...messages) => {
  throw new Error(`${messages.join('\n')}\nReffer the doc : ${process.env.REACT_APP_DOC_PATH}`);
};
