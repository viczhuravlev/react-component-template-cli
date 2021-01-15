"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isExists = void 0;
const fs_1 = __importDefault(require("fs"));
const fsp = fs_1.default.promises;
async function isExists(path) {
    try {
        await fsp.stat(path);
        return true;
    }
    catch (error) {
        return false;
    }
}
exports.isExists = isExists;
