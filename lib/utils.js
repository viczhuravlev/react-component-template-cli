"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStringWithCapitalLetter = exports.checkAndCreateFolders = exports.getFilePath = exports.createFile = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function createFile(fullPathTofile, data) {
    if (!data)
        return;
    fs_1.default.writeFileSync(fullPathTofile, data);
}
exports.createFile = createFile;
function getFilePath(folders, componentFile) {
    return path_1.default.resolve(...folders, componentFile);
}
exports.getFilePath = getFilePath;
function checkAndCreateFolders(folders) {
    const currentFolders = [];
    folders.forEach((element) => {
        currentFolders.push(element);
        const resolvePath = path_1.default.resolve(__dirname, ...currentFolders);
        if (!fs_1.default.existsSync(resolvePath)) {
            fs_1.default.mkdirSync(resolvePath);
        }
    });
}
exports.checkAndCreateFolders = checkAndCreateFolders;
function getStringWithCapitalLetter(string) {
    if (!string)
        return string;
    return string[0].toUpperCase() + string.slice(1);
}
exports.getStringWithCapitalLetter = getStringWithCapitalLetter;
