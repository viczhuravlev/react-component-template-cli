import fs from 'fs';

const fsp = fs.promises;

export async function isExists(path: string) {
  try {
    await fsp.stat(path);

    return true;
  } catch (error) {
    return false;
  }
}
