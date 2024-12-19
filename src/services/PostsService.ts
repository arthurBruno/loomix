import IPost from 'types/posts/IPost';
import JsonPlaceholderClient from './JsonPlaceholderClient';

const PostsService = {
  getList: () => JsonPlaceholderClient().get('/posts'),
  getUserPosts: (userId: number) =>
    JsonPlaceholderClient().get(`/users/${userId}/posts`),
  getItem: (postId: number) => JsonPlaceholderClient().get(`/posts/${postId}`),
  getComments: (postId: number) =>
    JsonPlaceholderClient().get('/comments', {
      params: {
        postId,
      },
    }),
  createPost: (post: IPost) =>
    new Promise((resolve) => {
      const newPosts = JSON.parse(localStorage.getItem('newPosts') || '[]');
      newPosts.unshift(post);
      localStorage.setItem('newPosts', JSON.stringify(newPosts));

      resolve('Post created!');
    }),
  getLocalStoragePosts: () =>
    JSON.parse(localStorage.getItem('newPosts') || '[]'),
};

export default PostsService;
