import JsonPlaceholderClient from './JsonPlaceholderClient';

const PostsService = {
  get: () => JsonPlaceholderClient().get('/posts'),
};

export default PostsService;
