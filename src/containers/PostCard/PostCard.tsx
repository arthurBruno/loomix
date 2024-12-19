import { Button, Flex, Grid, Text } from '@chakra-ui/react';
import {
  IoHeartOutline,
  IoChatboxOutline,
  IoBookmarkOutline,
} from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import Avatar from '@components/Avatar';
import Card from '@components/Card';
import VerticalSeparator from '@components/VerticalSeparator';
import ActionsButtons from './components/ActionsButtons/ActionsButtons';
import AppLink from '@components/AppLink';
import IPost from 'types/posts/IPost';
import Comments from './components/Comments/Comments';
import useUsersContext from 'contexts/UsersContext/UsersContext';

interface IPostCardProps extends IPost {
  showComments?: boolean;
}

const PostCard = ({
  id,
  title,
  body,
  createdAt,
  user,
  showComments = false,
}: IPostCardProps) => {
  const { loggedUser } = useUsersContext();
  const navigate = useNavigate();
  const handleNavigateToPost = () =>
    !showComments ? navigate(`/post/${id}`) : null;

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

          {loggedUser && loggedUser.id === user.id ? <ActionsButtons /> : null}
        </Flex>

        <Grid onClick={handleNavigateToPost}>
          <Text mt="0.75rem">{title}</Text>

          <Text mt="0.75rem">{body}</Text>

          <Flex justifyContent="end">
            <Button variant="ghost" padding="0">
              <IoHeartOutline />
            </Button>

            <Button variant="ghost" padding="0" onClick={handleNavigateToPost}>
              <IoChatboxOutline />
            </Button>

            <Button variant="ghost" padding="0">
              <IoBookmarkOutline />
            </Button>
          </Flex>
        </Grid>
      </Card>

      {showComments ? <Comments postId={id} /> : null}
    </Grid>
  );
};

export default PostCard;
