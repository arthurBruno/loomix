import { Outlet } from 'react-router-dom';
import { Grid, GridItem } from '@chakra-ui/react';
import UserSidemenu from '@containers/UserSidemenu/UserSidemenu';
import { UsersProvider } from 'contexts/UsersContext/UsersContext';

const ContentWrapper = () => (
  <UsersProvider>
    <Grid
      gridTemplateColumns={{
        sm: '0 min-content auto 0 0',
        md: '5% 20% 50% 20% 5%',
      }}
      marginTop={{
        sm: '0.25rem',
        md: '1.25rem',
      }}
      gap={{
        sm: '0.25rem',
        md: '1.25rem',
      }}
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
