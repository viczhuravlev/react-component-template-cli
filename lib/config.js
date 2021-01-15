"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const PATH_ROOT = path_1.default.join(__dirname, '..');
const config = {
    PATH_ROOT,
    PATH_TEMPLATE: path_1.default.join(PATH_ROOT, 'template'),
};
exports.default = config;
