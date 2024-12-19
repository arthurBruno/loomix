import JsonPlaceholderClient from './JsonPlaceholderClient';

const PostsService = {
  getList: () => JsonPlaceholderClient().get('/posts'),
  getItem: (postId: number) => JsonPlaceholderClient().get(`/posts/${postId}`),
  getComments: (postId: number) =>
    JsonPlaceholderClient().get('/comments', {
      params: {
        postId,
      },
    }),
};

export default PostsService;
