import PostsService from '@services/PostsService';
import { useMutation } from '@tanstack/react-query';

interface IUseActionsButtonsProps {
  postId: number;
  refetchPosts: () => void;
}

const useActionsButtons = ({
  postId,
  refetchPosts,
}: IUseActionsButtonsProps) => {
  const { mutateAsync: deletePostMutate } = useMutation({
    mutationFn: PostsService.deletePost,
    onSuccess: refetchPosts,
  });

  const handleDeleteClick = () => {
    deletePostMutate(postId);
  };

  return {
    handleDeleteClick,
  };
};

export default useActionsButtons;
