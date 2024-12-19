import { AxiosResponse } from 'axios';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import PostsService from '@services/PostsService';
import useUsersContext from 'contexts/UsersContext/UsersContext';
import IReqPost from 'types/posts/IReqPost';

const useUserProfile = () => {
  const { userId } = useParams();
  const { loggedUser, allUsers, isUsersLoading } = useUsersContext();

  const {
    data: posts,
    isFetching: isPostsLoading,
    refetch: refetchPosts,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: () => PostsService.getUserPosts(Number(userId)),
    enabled: !isUsersLoading,
    select: ({ data }: AxiosResponse<IReqPost[]>) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const postsList = data.map(({ userId, ...rest }) => ({
        ...rest,
        createdAt: '17 de dezembro de 2024',
        user: allUsers[Number(userId)],
      }));

      if (Number(userId) === loggedUser?.id) {
        return PostsService.getLocalStoragePosts().concat(postsList);
      }

      return postsList;
    },
  });

  return {
    posts,
    isPostsLoading,
    refetchPosts,
  };
};

export default useUserProfile;
