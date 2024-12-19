import { ReactNode } from 'react';
import { Button } from '@chakra-ui/react';

interface ISidemenuButtonProps {
  children: ReactNode;
}

const SidemenuButton = ({ children }: ISidemenuButtonProps) => (
  <Button
    variant="ghost"
    w="100%"
    placeContent="flex-start"
    fontSize="small"
    fontWeight="bold"
  >
    {children}
  </Button>
);

export default SidemenuButton;
