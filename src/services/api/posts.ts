import {ResponsePostType} from './../../types/types';
import {instance} from '../config';

export const postsAPI = {
  getPosts() {
    return instance.get<ResponsePostType>('/posts');
  },
};
