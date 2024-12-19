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
  getLocalStoragePosts: () =>
    JSON.parse(localStorage.getItem('newPosts') || '[]'),
  createPost: (post: IPost) =>
    new Promise((resolve) => {
      const newPosts = JSON.parse(localStorage.getItem('newPosts') || '[]');
      newPosts.unshift(post);
      localStorage.setItem('newPosts', JSON.stringify(newPosts));

      resolve('Post created!');
    }),
  editPost: (editedPost: IPost) =>
    new Promise((resolve) => {
      const newPosts = JSON.parse(localStorage.getItem('newPosts') || '[]');

      localStorage.setItem(
        'newPosts',
        JSON.stringify(
          newPosts.map((post: IPost) =>
            post.id === editedPost.id
              ? { ...post, body: editedPost.body }
              : post,
          ),
        ),
      );

      resolve('Post deleted!');
    }),
  deletePost: (postId: number) =>
    new Promise((resolve) => {
      const newPosts = JSON.parse(localStorage.getItem('newPosts') || '[]');

      localStorage.setItem(
        'newPosts',
        JSON.stringify(newPosts.filter((post: IPost) => post.id !== postId)),
      );

      resolve('Post deleted!');
    }),
};

export default PostsService;
