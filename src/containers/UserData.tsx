import { Button, Grid, Text } from '@chakra-ui/react';
import { IoLogOutOutline } from 'react-icons/io5';
import Avatar from '@components/Avatar';
import AppLink from '@components/AppLink';

const UserData = () => (
  <Grid
    gridTemplateColumns="max-content auto min-content"
    alignItems="center"
    gap="0.5rem"
  >
    <Avatar src="https://picsum.photos/200" alt="Avatar do usuário" />

    <Grid fontSize="small">
      <AppLink href="/perfil/1">João Silva Costa</AppLink>
      <Text>@joao_silva</Text>
    </Grid>

    <Button variant="ghost" padding="0">
      <IoLogOutOutline />
    </Button>
  </Grid>
);

export default UserData;
