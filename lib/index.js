#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const config_1 = __importDefault(require("./config"));
const logger_1 = __importDefault(require("./utils/logger"));
const mustache_1 = __importDefault(require("./utils/mustache"));
const helpers_1 = require("./utils/helpers");
const fsp = fs_1.default.promises;
const { exit } = process;
async function checkFolders(pathFolders) {
    const folders = pathFolders.split('/');
    let currentPath = '';
    for await (const filename of folders) {
        currentPath = path_1.default.join(currentPath, filename);
        try {
            await fsp.stat(currentPath);
        }
        catch {
            await fsp.mkdir(currentPath);
        }
    }
}
async function init() {
    const folders = './components/test/Input';
    const nameComponent = 'Input';
    const componentFolderName = 'react';
    const pathTemplate = config_1.default.PATH_TEMPLATE;
    const hasTemplate = await helpers_1.isExists(pathTemplate);
    if (!hasTemplate) {
        logger_1.default.error(`No templates folder found - ${pathTemplate}.`);
        return;
    }
    const pathComponentFolderName = path_1.default.join(pathTemplate, componentFolderName);
    const hasComponentFolder = await helpers_1.isExists(pathComponentFolderName);
    if (!hasComponentFolder) {
        logger_1.default.error(`folder with template component not found - ${pathTemplate}.`);
        return;
    }
    await checkFolders(folders);
    const allFiles = await fsp.readdir(pathComponentFolderName);
    await Promise.all(allFiles.map(async (fileName) => {
        const fileString = await fsp.readFile(path_1.default.join(pathComponentFolderName, fileName), 'utf8');
        await fsp.writeFile(path_1.default.join(folders, mustache_1.default(fileName, { name: nameComponent })), mustache_1.default(fileString, { name: nameComponent }));
    }));
}
init();
process.on('uncaughtException', (error) => {
    logger_1.default.error(error.message, 'uncaughtException');
    exit(-1);
});
process.on('unhandledRejection', (error) => {
    if (!error || !error.message) {
        logger_1.default.error('Unknown error', 'unhandledRejection');
    }
    else {
        logger_1.default.error(error.message, 'unhandledRejection');
    }
    exit(-1);
});
