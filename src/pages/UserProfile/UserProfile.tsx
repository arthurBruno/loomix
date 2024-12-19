import { Grid } from '@chakra-ui/react';
import Loading from '@components/Loading';
import PostCard from '@containers/PostCard/PostCard';
import useUserProfile from './useUserProfile/useUserProfile';
import BackToFeed from '@components/BackToFeed';
import IPost from 'types/posts/IPost';

const UserProfile = () => {
  const { posts, isPostsLoading, refetchPosts } = useUserProfile();

  return (
    <Grid gap="1rem">
      <BackToFeed />

      {isPostsLoading ? (
        <Loading />
      ) : (
        posts?.map((post: IPost) => (
          <PostCard key={post.id} refetchPosts={refetchPosts} {...post} />
        ))
      )}
    </Grid>
  );
};

export default UserProfile;
