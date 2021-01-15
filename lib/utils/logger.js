"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Logger {
    static info(message) {
        console.info('[INFO]', message);
    }
    static log(message) {
        console.log('[LOG]', message);
    }
    static warn(message) {
        console.warn('[WARNING]', message);
    }
    static error(message, subcategory) {
        const extraInfo = subcategory ? `/${subcategory}` : '';
        console.error(`🔥🔥🔥 [ERROR${extraInfo}]`, message);
    }
}
exports.default = Logger;
