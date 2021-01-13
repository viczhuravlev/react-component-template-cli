#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const minimist_1 = __importDefault(require("minimist"));
const utils_1 = require("./utils");
const template = __importStar(require("./template"));
const args = minimist_1.default(process.argv);
const { path, ext = 'ts' } = args;
if (!path || path === '.') {
    throw new Error(`--path is required.
        If you want to create a component at the call point,
        then you need to use "./{nameComponent}"
    `);
}
const folders = path.split('/');
const componentName = folders[folders.length - 1];
const componentPath = [__dirname, ...folders];
utils_1.checkAndCreateFolders(folders);
function createComponentFile(fileName) {
    const nameFunction = utils_1.getStringWithCapitalLetter(fileName);
    if (!nameFunction)
        return;
    let fullFileName = '';
    switch (fileName) {
        case 'index':
            fullFileName = `index.${ext}`;
            break;
        case 'component':
            fullFileName = `${componentName}.${ext}x`;
            break;
        case 'mocks':
        case 'tests':
        case 'stories': {
            fullFileName = `${componentName}.${fileName}.${ext}x`;
            break;
        }
        default: {
            fullFileName = `${componentName}.${fileName}.${ext}`;
        }
    }
    utils_1.createFile(utils_1.getFilePath(componentPath, fullFileName), template.default[`get${nameFunction}File`](componentName));
}
['index', 'component', 'tests', 'utils', 'types', 'mocks', 'styles', 'stories'].forEach(createComponentFile);
