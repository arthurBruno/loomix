import { Grid } from '@chakra-ui/react';
import Loading from '@components/Loading';
import PostCard from '@containers/PostCard/PostCard';
import useUserProfile from './useUserProfile/useUserProfile';
import BackToFeed from '@components/BackToFeed';

const UserProfile = () => {
  const { posts, isPostsLoading } = useUserProfile();

  return (
    <Grid gap="1rem">
      <BackToFeed />

      {isPostsLoading ? (
        <Loading />
      ) : (
        posts?.map((post) => <PostCard key={post.id} {...post} />)
      )}
    </Grid>
  );
};

export default UserProfile;
