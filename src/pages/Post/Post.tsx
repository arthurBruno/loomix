import PostCard from '@containers/PostCard/PostCard';
import usePost from './usePost/usePost';
import Loading from '@components/Loading';

const Post = () => {
  const { post, isPostLoading } = usePost();

  return isPostLoading || !post ? (
    <Loading />
  ) : (
    <PostCard {...post} showComments />
  );
};

export default Post;
