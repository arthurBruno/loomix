import PostsService from '@services/PostsService';
import { useMutation } from '@tanstack/react-query';
import formatDate from '@utils/formatDate';
import useUsersContext from 'contexts/UsersContext/UsersContext';
import { useState } from 'react';

interface IUseAddPostCardProps {
  refetchPosts: () => void;
}

const useAddPostCard = ({ refetchPosts }: IUseAddPostCardProps) => {
  const { loggedUser } = useUsersContext();
  const [isAddingPost, setIsAddingPost] = useState<boolean>(false);
  const [newPostValue, setNewPostValue] = useState<string>('');

  const { mutateAsync } = useMutation({
    mutationFn: PostsService.createPost,
    onSuccess: refetchPosts,
  });

  const handleClickAddPost = () => {
    setIsAddingPost(true);
  };

  const handleSubmit = () => {
    setIsAddingPost(false);
    setNewPostValue('');

    if (loggedUser) {
      mutateAsync({
        id: Math.random(),
        title: '',
        body: newPostValue,
        createdAt: formatDate(new Date()),
        user: loggedUser,
      });
    }
  };

  return {
    isAddingPost,
    handleClickAddPost,
    handleSubmit,
    newPostValue,
    setNewPostValue,
  };
};

export default useAddPostCard;
