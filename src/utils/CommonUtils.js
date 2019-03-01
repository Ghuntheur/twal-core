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
}

export default CommonUtils;
