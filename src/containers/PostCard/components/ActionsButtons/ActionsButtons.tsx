import {
  Button,
  Flex,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from '@chakra-ui/react';
import {
  IoEllipsisVertical,
  IoPencilSharp,
  IoTrashOutline,
} from 'react-icons/io5';
import useActionsButtons from './useActionsButtons/useActionsButtons';
interface IActionsButtonsProps {
  postId: number;
  handleEditClick: () => void;
  refetchPosts: () => void;
}

const ActionsButtons = ({
  postId,
  handleEditClick,
  refetchPosts,
}: IActionsButtonsProps) => {
  const { handleDeleteClick } = useActionsButtons({
    postId,
    refetchPosts,
  });

  return (
    <Flex position="relative">
      <MenuRoot>
        <MenuTrigger asChild>
          <Button variant="ghost" padding="0">
            <IoEllipsisVertical />
          </Button>
        </MenuTrigger>

        <MenuContent position="absolute" top="100%" right="0">
          <MenuItem
            value="edit"
            _hover={{ bg: 'bg.info', color: 'fg.info', cursor: 'pointer' }}
            onClick={handleEditClick}
          >
            <IoPencilSharp />
            Editar
          </MenuItem>

          <MenuItem
            value="delete"
            color="fg.error"
            _hover={{ bg: 'bg.error', color: 'fg.error', cursor: 'pointer' }}
            onClick={handleDeleteClick}
          >
            <IoTrashOutline />
            Excluir
          </MenuItem>
        </MenuContent>
      </MenuRoot>
    </Flex>
  );
};

export default ActionsButtons;
