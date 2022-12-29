import {Dirs, FileSystem} from 'react-native-file-access';

const patch = Dirs.CacheDir + '/posts.json';

export const writeFile = async (value: any) => {
  try {
    await FileSystem.writeFile(patch, JSON.stringify(value));
    console.info('Posts saved');
  } catch (e) {
    throw Error('Written Failed');
  }
};

export const readFile = async () => {
  try {
    const data = await FileSystem.readFile(patch);
    return JSON.parse(data);
  } catch (e) {
    throw Error('Reading Failed');
  }
};
