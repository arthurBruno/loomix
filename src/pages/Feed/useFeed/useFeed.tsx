import { AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import PostsService from '@services/PostsService';
import useUsersContext from 'contexts/UsersContext/UsersContext';
import IReqPost from 'types/posts/IReqPost';

const useFeed = () => {
  const { allUsers, isUsersLoading } = useUsersContext();

  const {
    data: posts,
    isFetching: isPostsLoading,
    refetch: refetchPosts,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: PostsService.getList,
    enabled: !isUsersLoading,
    select: ({ data }: AxiosResponse<IReqPost[]>) =>
      PostsService.getLocalStoragePosts().concat(
        data.map(({ userId, ...rest }) => ({
          ...rest,
          createdAt: '17 de dezembro de 2024',
          user: allUsers[userId],
        })),
      ),
  });

  return {
    posts,
    isPostsLoading,
    refetchPosts,
  };
};

export default useFeed;
