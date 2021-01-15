import path from 'path';

const PATH_ROOT = path.join(__dirname, '..');

const config = {
  PATH_ROOT,
  PATH_TEMPLATE: path.join(PATH_ROOT, 'template'),
};

export default config;
