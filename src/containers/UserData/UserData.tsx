import { Button, Grid, Text } from '@chakra-ui/react';
import { IoLogOutOutline } from 'react-icons/io5';
import Avatar from '@components/Avatar';
import AppLink from '@components/AppLink';
import useUsersContext from 'contexts/UsersContext/UsersContext';
import Loading from '@components/Loading';

const UserData = () => {
  const { loggedUser, isUsersLoading } = useUsersContext();
  const isLoading = isUsersLoading || !loggedUser;

  return (
    <Grid
      gridTemplateColumns="max-content auto min-content"
      alignItems="center"
      gap="0.5rem"
    >
      {isLoading ? (
        <>
          <div />
          <Loading size="md" />
        </>
      ) : (
        <>
          <Avatar
            src={loggedUser.photo}
            alt={`Avatar do usuário ${loggedUser.name}`}
          />

          <Grid fontSize="small">
            <AppLink href={`/perfil/${loggedUser.id}`}>
              {loggedUser.name}
            </AppLink>

            <Text textTransform="lowercase">@{loggedUser.nickname}</Text>
          </Grid>
        </>
      )}

      <Button variant="ghost" padding="0">
        <IoLogOutOutline />
      </Button>
    </Grid>
  );
};

export default UserData;
