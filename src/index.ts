import minimist from 'minimist';

import {
  createFile,
  getFilePath,
  checkAndCreateFolders,
  getStringWithCapitalLetter,
} from './utils';

import * as template from './template';

type Args = { path: '.' | string; ext: 'ts' | string };

const args = minimist<Args>(process.argv);

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

function createComponentFile(fileName: string) {
  const nameFunction = getStringWithCapitalLetter(fileName);

  if (!nameFunction) return;

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

  createFile(
    getFilePath(componentPath, fullFileName),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    template.default[`get${nameFunction}File`](componentName)
  );
}

[
  'index',
  'component',
  'tests',
  'utils',
  'types',
  'mocks',
  'styles',
  'stories',
].forEach(createComponentFile);
