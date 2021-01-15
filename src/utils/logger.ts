/* eslint-disable no-console */

type Message = string | number | Record<string, unknown>;

class Logger {
  static info(message: Message): void {
    console.info('[INFO]', message);
  }

  static log(message: Message): void {
    console.log('[LOG]', message);
  }

  static warn(message: Message): void {
    console.warn('[WARNING]', message);
  }

  static error(message: Message, subcategory?: string): void {
    const extraInfo = subcategory ? `/${subcategory}` : '';

    console.error(`🔥🔥🔥 [ERROR${extraInfo}]`, message);
  }
}

export default Logger;
