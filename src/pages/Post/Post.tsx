import { Grid } from '@chakra-ui/react';
import PostCard from '@containers/PostCard/PostCard';
import usePost from './usePost/usePost';
import Loading from '@components/Loading';
import BackToFeed from '@components/BackToFeed';

const Post = () => {
  const { post, isPostLoading } = usePost();

  return (
    <Grid gap="1rem">
      <BackToFeed />

      {isPostLoading || !post ? (
        <Loading />
      ) : (
        <PostCard {...post} showComments />
      )}
    </Grid>
  );
};

export default Post;
