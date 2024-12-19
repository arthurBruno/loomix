import { Grid, Text } from '@chakra-ui/react';
import useComments from './hooks/useComments';
import Loading from '@components/Loading';
import Comment from '@components/Comment';
import AddComment from './components/AddCommentCard';

interface ICommentsProps {
  postId: number;
}

const Comments = ({ postId }: ICommentsProps) => {
  const { comments, isCommentsLoading } = useComments({ postId });

  return (
    <>
      {isCommentsLoading || !comments ? (
        <Loading size="sm" />
      ) : (
        <Grid gap="0.5rem" margin="1.5rem 0">
          {comments.length > 0 ? (
            comments.map((comment) => <Comment key={comment.id} {...comment} />)
          ) : (
            <Text fontSize="small">Esta publicação não possui comentários</Text>
          )}
        </Grid>
      )}

      <AddComment />
    </>
  );
};

export default Comments;
