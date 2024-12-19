import { Grid, Icon, Text } from '@chakra-ui/react';
import { IoEllipse } from 'react-icons/io5';
import IComment from 'types/posts/IComment';

const Comment = ({ userEmail, body }: IComment) => (
  <Grid
    w="95%"
    gap="0.5rem"
    placeSelf="center"
    gridTemplateColumns="max-content min-content auto"
  >
    <Text fontSize="small" textTransform="lowercase">
      {userEmail}
    </Text>

    <Icon fontSize="0.4em" color="colorPalette.500" marginTop="0.4rem">
      <IoEllipse />
    </Icon>

    <Text fontSize="small" color="colorPalette.500">
      {body}
    </Text>
  </Grid>
);

export default Comment;
