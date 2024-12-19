import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import IPost from 'types/posts/IPost';
import PostsService from '@services/PostsService';
import formatDate from '@utils/formatDate';

interface IUsePostCardProps extends IPost {
  showComments: boolean;
  refetchPosts: () => void;
}

const usePostCard = ({
  id,
  title,
  user,
  refetchPosts,
  showComments,
}: IUsePostCardProps) => {
  const navigate = useNavigate();
  const [isEditingPost, setIsEditingPost] = useState<boolean>(false);
  const [postValue, setPostValue] = useState<string>('');

  const { mutateAsync: editPostMutate } = useMutation({
    mutationFn: PostsService.editPost,
    onSuccess: refetchPosts,
  });

  const handleEditClick = () => setIsEditingPost(true);

  const handleEditSubmit = () => {
    editPostMutate({
      id,
      title,
      body: postValue,
      createdAt: formatDate(new Date()),
      user,
    });
  };

  const handleNavigateToPost = () =>
    !showComments && !isEditingPost ? navigate(`/post/${id}`) : null;

  return {
    isEditingPost,
    postValue,
    setPostValue,
    handleEditClick,
    handleEditSubmit,
    navigate,
    handleNavigateToPost,
  };
};

export default usePostCard;
