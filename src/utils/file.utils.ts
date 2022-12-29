import {Dirs, FileSystem} from 'react-native-file-access';

export const writeFile = async (value: any) => {
  const patch = Dirs.CacheDir + '/posts.json';
  try {
    await FileSystem.writeFile(patch, JSON.stringify(value));
    console.log('Posts saved');
  } catch (e) {
    throw Error('Written Failed');
  }
};

export const readFile = async () => {
  const patch = Dirs.CacheDir + '/posts.json';
  const data = await FileSystem.readFile(patch);
  return JSON.parse(data);
};
