import { Button, Flex, Text } from '@chakra-ui/react';
import {
  IoHeartOutline,
  IoChatboxOutline,
  IoBookmarkOutline,
} from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import Avatar from '@components/Avatar';
import Card from '@components/Card';
import VerticalSeparator from '@components/VerticalSeparator';
import ActionsButtons from './components/ActionsButtons';
import AppLink from '@components/AppLink';
import IPost from 'types/IPost';

const PostCard = ({ id, title, body, createdAt, user }: IPost) => {
  const navigate = useNavigate();

  return (
    <Card
      variant="button"
      onClick={() => console.log('Post redirect')}
      padding="0.75rem"
    >
      <Flex justifyContent="space-between">
        <Flex align="center" gap="0.5rem">
          <AppLink href={`/perfil/${user.id}`} fontWeight="normal">
            <Avatar src={user.photo} alt="Logo Loomix" />
            {user.nickname}
          </AppLink>

          <VerticalSeparator />

          <Text fontSize="small" color="colorPalette.500">
            {createdAt}
          </Text>
        </Flex>

        <ActionsButtons />
      </Flex>

      <Text mt="0.75rem">{title}</Text>

      <Text mt="0.75rem">{body}</Text>

      <Flex justifyContent="end">
        <Button variant="ghost" padding="0">
          <IoHeartOutline />
        </Button>

        <Button
          variant="ghost"
          padding="0"
          onClick={() => navigate(`/post/${id}`)}
        >
          <IoChatboxOutline />
        </Button>

        <Button variant="ghost" padding="0">
          <IoBookmarkOutline />
        </Button>
      </Flex>
    </Card>
  );
};

export default PostCard;
