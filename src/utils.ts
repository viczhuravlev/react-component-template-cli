import fs from 'fs';
import path from 'path';

type Folders = string[];

export function createFile(fullPathTofile: string, data?: string) {
  if (!data) return;

  fs.writeFileSync(fullPathTofile, data);
}

export function getFilePath(folders: Folders, componentFile: string) {
  return path.resolve(...folders, componentFile);
}

export function checkAndCreateFolders(folders: Folders) {
  const currentFolders: Folders = [];

  folders.forEach((element) => {
    currentFolders.push(element);

    const resolvePath = path.resolve(__dirname, ...currentFolders);

    if (!fs.existsSync(resolvePath)) {
      fs.mkdirSync(resolvePath);
    }
  });
}

export function getStringWithCapitalLetter(string?: string) {
  if (!string) return string;

  return string[0].toUpperCase() + string.slice(1);
}
