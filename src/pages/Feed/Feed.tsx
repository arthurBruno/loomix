import { Grid } from '@chakra-ui/react';
import PostCard from '@containers/PostCard/PostCard';
import useFeed from './useFeed/useFeed';
import Loading from '@components/Loading';
import AddPostCard from '@containers/AddPostCard/AddPostCard';

const Feed = () => {
  const { posts, isPostsLoading, refetchPosts } = useFeed();

  return (
    <Grid gap="1rem">
      <AddPostCard refetchPosts={refetchPosts} />

      {isPostsLoading ? (
        <Loading />
      ) : (
        posts?.map((post) => <PostCard key={post.id} {...post} />)
      )}
    </Grid>
  );
};

export default Feed;
