import {
  Button,
  Flex,
  Grid,
  GridItem,
  MenuContent,
  MenuRoot,
  MenuTrigger,
} from '@chakra-ui/react';
import { IoMenu } from 'react-icons/io5';
import Card from '@components/Card';
import UserSidemenuContent from './components/UserSidemenuContent';

const UserSidemenu = () => (
  <Grid>
    <GridItem display={{ base: 'block', md: 'none' }}>
      <Flex position="relative">
        <MenuRoot>
          <MenuTrigger asChild>
            <Button variant="ghost" padding="0">
              <IoMenu />
            </Button>
          </MenuTrigger>

          <MenuContent
            position="absolute"
            top="100%"
            left="0"
            w="100vw"
            p="1rem"
          >
            <UserSidemenuContent />
          </MenuContent>
        </MenuRoot>
      </Flex>
    </GridItem>

    <GridItem display={{ base: 'none', md: 'block' }}>
      <Card padding="1rem 0.75rem">
        <UserSidemenuContent />
      </Card>
    </GridItem>
  </Grid>
);

export default UserSidemenu;
