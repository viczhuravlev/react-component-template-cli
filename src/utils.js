const fs = require('fs');
const path = require('path');

function createFile(fullPathTofile, data) {
  fs.writeFileSync(fullPathTofile, data);
}

function getFilePath(folders, componentFile) {
  return path.resolve(...folders, componentFile);
}

function checkAndCreateFolders(folders) {
  const currentFolders = [];

  folders.forEach((element) => {
    currentFolders.push(element);

    const resolvePath = path.resolve(__dirname, ...currentFolders);

    if (!fs.existsSync(resolvePath)) {
      fs.mkdirSync(resolvePath);
    }
  });
}

function getStringWithCapitalLetter(string) {
  if (!string) return string;

  return string[0].toUpperCase() + string.slice(1);
}

module.exports = {
  createFile,
  getFilePath,
  checkAndCreateFolders,
  getStringWithCapitalLetter,
};
