const fs = require('fs');
const minimist = require('minimist');

const {
  createFile,
  getFilePath,
  checkAndCreateFolders,
  getStringWithCapitalLetter,
} = require('./utils');
const template = require('./template');

const args = minimist(process.argv);

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

checkAndCreateFolders(folders);

['index', 'component', 'tests', 'utils', 'types', 'styles', 'stories'].forEach(createComponentFile);

function createComponentFile(fileName) {
  let fullFileName = '';

  switch (fileName) {
    case 'index':
      fullFileName = `index.${ext}`;
      break;

    case 'component':
      fullFileName = `${componentName}.${ext}x`;
      break;

    case 'tests':
    case 'stories': {
      fullFileName = `${componentName}.${fileName}.${ext}x`;
      break;
    }

    default: {
      fullFileName = `${componentName}.${fileName}.${ext}`;
    }
  }

  createFile(
    getFilePath(componentPath, fullFileName),
    template[`get${getStringWithCapitalLetter(fileName)}File`](componentName)
  );
}
