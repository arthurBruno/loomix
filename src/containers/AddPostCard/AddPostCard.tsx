import { Box, Button, Text, Textarea } from '@chakra-ui/react';
import {
  IoAddCircleOutline,
  IoArrowForwardCircleOutline,
} from 'react-icons/io5';
import Card from '@components/Card';
import useAddPostCard from './useAddPostCard/useAddPostCard';

interface IAddPostCardProps {
  refetchPosts: () => void;
}

const AddPostCard = ({ refetchPosts }: IAddPostCardProps) => {
  const { isAddingPost, handleClickAddPost, handleSubmit, setNewPostValue } =
    useAddPostCard({ refetchPosts });

  return (
    <Card padding="0.75rem">
      {isAddingPost ? (
        <Box textAlign="right">
          <Textarea
            placeholder="Como você  está se sentindo?"
            onChange={(e) => setNewPostValue(e.target.value)}
          />

          <Button size="xs" onClick={handleSubmit}>
            <Text>Postar</Text>
            <IoArrowForwardCircleOutline />
          </Button>
        </Box>
      ) : (
        <Button w="100%" variant="subtle" onClick={handleClickAddPost}>
          <IoAddCircleOutline />
          <Text>Novo post</Text>
        </Button>
      )}
    </Card>
  );
};

export default AddPostCard;
