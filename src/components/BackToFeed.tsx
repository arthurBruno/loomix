import { Text } from '@chakra-ui/react';
import { IoArrowBackOutline } from 'react-icons/io5';
import AllRoutes from '@enums/AllRoutes';
import AppLink from './AppLink';

const BackToFeed = () => (
  <AppLink href={AllRoutes.Feed}>
    <IoArrowBackOutline />
    <Text fontSize="small">voltar para o feed</Text>
  </AppLink>
);

export default BackToFeed;
