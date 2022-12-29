import {ResponseCommentType, ResponsePostType} from '../../types';
import {instance} from '../config';

export const postsAPI = {
  getPosts() {
    return instance.get<ResponsePostType[]>('/posts');
  },
  getComments(id: number) {
    return instance.get<ResponseCommentType[]>(
      `/comments?postId=${id.toString()}`,
    );
  },
};
