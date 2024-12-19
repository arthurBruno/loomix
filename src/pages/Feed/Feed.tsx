import { Grid } from '@chakra-ui/react';
import PostCard from '@containers/PostCard/PostCard';
import useFeed from './useFeed/useFeed';
import Loading from '@components/Loading';

const Feed = () => {
  const { posts, isPostsLoading } = useFeed();

  return (
    <Grid gap="1rem">
      {isPostsLoading ? (
        <Loading />
      ) : (
        posts?.map((post) => <PostCard key={post.id} {...post} />)
      )}
    </Grid>
  );
};

export default Feed;
