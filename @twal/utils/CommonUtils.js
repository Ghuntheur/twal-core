class CommonUtils {
  /**
   * Return if it's dev mode
   */
  static isDev() {
    return process.env.NODE_ENV === 'development';
  }

  /**
   * Return if it's prod mode
   */
  static isProd() {
    return process.env.NODE_ENV === 'production';
  }

  static throwError(...messages) {
    throw new Error(`${messages.join('\n')}\nReffer the doc : ${process.env.REACT_APP_DOC_PATH}`);
  }
}

export default CommonUtils;
