interface BasePostType {
  id: number;
  body: string;
}

export interface ResponsePostType extends BasePostType {
  userId: number;
  title: string;
}

export interface ResponseCommentType extends BasePostType {
  postId: number;
  name: string;
  email: string;
}
