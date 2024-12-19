import { Grid } from '@chakra-ui/react';
import {
  IoSearch,
  IoBookmarkOutline,
  IoSettingsOutline,
} from 'react-icons/io5';
import { Link } from 'react-router-dom';
import LoomixLogo from '@assets/loomix-logo.png';
import Image from '@components/Image';
import SidemenuButton from '@components/SidemenuButton';
import AllRoutes from '@enums/AllRoutes';
import UserData from '@containers/UserData/UserData';

const UserSidemenuContent = () => (
  <Grid gap="2rem">
    <Grid placeContent="center">
      <Link to={AllRoutes.Feed}>
        <Image src={LoomixLogo} alt="Logo Loomix" />
      </Link>
    </Grid>

    <Grid>
      <SidemenuButton>
        <IoSearch />
        PESQUISAR
      </SidemenuButton>

      <SidemenuButton>
        <IoBookmarkOutline />
        SALVOS
      </SidemenuButton>

      <SidemenuButton>
        <IoSettingsOutline />
        CONFIGURAÇÕES
      </SidemenuButton>
    </Grid>

    <UserData />
  </Grid>
);

export default UserSidemenuContent;
