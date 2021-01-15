#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

import config from './config';

import logger from './utils/logger';
import mustache from './utils/mustache';
import { isExists } from './utils/helpers';

const fsp = fs.promises;

const { exit } = process;

async function checkFolders(pathFolders: string) {
  const folders: string[] = pathFolders.split('/');

  let currentPath = '';

  // eslint-disable-next-line no-restricted-syntax
  for await (const filename of folders) {
    currentPath = path.join(currentPath, filename);

    try {
      await fsp.stat(currentPath);
    } catch {
      await fsp.mkdir(currentPath);
    }
  }
}

async function init() {
  const folders = './components/test/Input'; // TODO: ask user
  const nameComponent = 'Input'; // TODO: ask user
  const componentFolderName = 'react'; // TODO: dynamic define
  const pathTemplate = config.PATH_TEMPLATE; // TODO: ask user + default

  const hasTemplate = await isExists(pathTemplate);

  if (!hasTemplate) {
    logger.error(`No templates folder found - ${pathTemplate}.`);

    return;
  }

  const pathComponentFolderName = path.join(pathTemplate, componentFolderName);
  const hasComponentFolder = await isExists(pathComponentFolderName);

  if (!hasComponentFolder) {
    logger.error(`folder with template component not found - ${pathTemplate}.`);

    return;
  }

  await checkFolders(folders);

  const allFiles = await fsp.readdir(pathComponentFolderName);

  await Promise.all(
    allFiles.map(async (fileName) => {
      const fileString = await fsp.readFile(path.join(pathComponentFolderName, fileName), 'utf8');

      await fsp.writeFile(
        path.join(folders, mustache(fileName, { name: nameComponent })),
        mustache(fileString, { name: nameComponent }),
      );
    }),
  );
}

init();

process.on('uncaughtException', (error) => {
  logger.error(error.message, 'uncaughtException');

  exit(-1);
});

process.on('unhandledRejection', (error: Error) => {
  if (!error || !error.message) {
    logger.error('Unknown error', 'unhandledRejection');
  } else {
    logger.error(error.message, 'unhandledRejection');
  }

  exit(-1);
});
