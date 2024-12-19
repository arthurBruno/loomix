import { AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import PostsService from '@services/PostsService';
import useUsersContext from 'contexts/UsersContext/UsersContext';
import IReqPost from 'types/posts/IReqPost';
import { useParams } from 'react-router-dom';

const usePost = () => {
  const { postId } = useParams();
  const { allUsers, isUsersLoading } = useUsersContext();

  const { data: post, isFetching: isPostLoading } = useQuery({
    queryKey: ['post', postId],
    queryFn: () => PostsService.getItem(Number(postId)),
    enabled: !isUsersLoading,
    select: ({ data }: AxiosResponse<IReqPost>) => ({
      ...data,
      createdAt: '17 de dezembro de 2024',
      user: allUsers[data.userId],
    }),
  });

  return {
    post,
    isPostLoading,
  };
};

export default usePost;
