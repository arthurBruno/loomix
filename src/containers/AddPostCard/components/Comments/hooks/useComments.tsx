import { AxiosResponse } from 'axios';
import { useQuery } from '@tanstack/react-query';
import PostsService from '@services/PostsService';
import IReqComment from 'types/posts/IReqComment';

interface IUseCommentsProps {
  postId: number;
}

const useComments = ({ postId }: IUseCommentsProps) => {
  const { data: comments, isFetching: isCommentsLoading } = useQuery({
    queryKey: ['comments'],
    queryFn: () => PostsService.getComments(postId),
    select: ({ data }: AxiosResponse<IReqComment[]>) =>
      data.map(({ id, body, email }) => ({
        id,
        body,
        userEmail: email,
      })),
  });

  return {
    comments,
    isCommentsLoading,
  };
};

export default useComments;
