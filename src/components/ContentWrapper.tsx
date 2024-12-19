import { Outlet } from 'react-router-dom';
import { Grid, GridItem } from '@chakra-ui/react';
import UserSidemenu from '@containers/UserSidemenu';
import { UsersProvider } from 'contexts/UsersContext/UsersContext';

const ContentWrapper = () => (
  <UsersProvider>
    <Grid
      gridTemplateColumns="5% 20% 50% 20% 5%"
      marginTop="1.25rem"
      gap="1.25rem"
    >
      <GridItem />

      <GridItem>
        <UserSidemenu />
      </GridItem>

      <GridItem>
        <Outlet />
      </GridItem>

      <GridItem />
      <GridItem />
    </Grid>
  </UsersProvider>
);

export default ContentWrapper;
