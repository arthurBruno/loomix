import { Button, Flex, Grid, Text, Textarea } from '@chakra-ui/react';
import {
  IoHeartOutline,
  IoChatboxOutline,
  IoBookmarkOutline,
  IoArrowForwardCircleOutline,
} from 'react-icons/io5';
import Avatar from '@components/Avatar';
import Card from '@components/Card';
import VerticalSeparator from '@components/VerticalSeparator';
import ActionsButtons from './components/ActionsButtons/ActionsButtons';
import AppLink from '@components/AppLink';
import IPost from 'types/posts/IPost';
import Comments from './components/Comments/Comments';
import useUsersContext from 'contexts/UsersContext/UsersContext';
import usePostCard from './hooks/usePostCard/usePostCard';

interface IPostCardProps extends IPost {
  showComments?: boolean;
  refetchPosts: () => void;
}

const PostCard = ({
  id,
  title,
  body,
  createdAt,
  user,
  refetchPosts,
  showComments = false,
}: IPostCardProps) => {
  const { loggedUser } = useUsersContext();
  const {
    isEditingPost,
    postValue,
    setPostValue,
    handleEditClick,
    handleEditSubmit,
    handleNavigateToPost,
  } = usePostCard({
    id,
    title,
    body,
    createdAt,
    user,
    refetchPosts,
    showComments,
  });

  return (
    <Grid>
      <Card variant={!showComments ? 'button' : undefined} padding="0.75rem">
        <Flex justifyContent="space-between">
          <Flex align="center" gap="0.5rem">
            <AppLink href={`/perfil/${user.id}`} fontWeight="normal">
              <Avatar src={user.photo} alt="Logo Loomix" />
              <Text textTransform="lowercase">@{user.nickname}</Text>
            </AppLink>

            <VerticalSeparator />

            <Text fontSize="small" color="colorPalette.500">
              {createdAt}
            </Text>
          </Flex>

          {loggedUser && loggedUser.id === user.id ? (
            <ActionsButtons
              postId={id}
              handleEditClick={handleEditClick}
              refetchPosts={refetchPosts}
            />
          ) : null}
        </Flex>

        <Grid onClick={handleNavigateToPost}>
          <Text mt="0.75rem">{title}</Text>

          {isEditingPost ? (
            <Textarea
              placeholder="Como você  está se sentindo?"
              value={postValue}
              onChange={(e) => setPostValue(e.target.value)}
            />
          ) : (
            <Text mt="0.75rem">{body}</Text>
          )}

          <Flex justifyContent="end">
            {isEditingPost ? (
              <Button size="xs" onClick={handleEditSubmit}>
                <Text>Postar</Text>
                <IoArrowForwardCircleOutline />
              </Button>
            ) : (
              <>
                <Button variant="ghost" padding="0">
                  <IoHeartOutline />
                </Button>

                <Button
                  variant="ghost"
                  padding="0"
                  onClick={handleNavigateToPost}
                >
                  <IoChatboxOutline />
                </Button>

                <Button variant="ghost" padding="0">
                  <IoBookmarkOutline />
                </Button>
              </>
            )}
          </Flex>
        </Grid>
      </Card>

      {showComments ? <Comments postId={id} /> : null}
    </Grid>
  );
};

export default PostCard;
