import { Grid, IconButton, Input } from '@chakra-ui/react';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';
import Card from '@components/Card';

const AddCommentCard = () => {
  return (
    <Card>
      <Grid gridTemplateColumns="auto min-content" gap="0.5rem">
        <Input placeholder="Adicionar comentário" />

        <IconButton aria-label="Enviar comentário">
          <IoArrowForwardCircleOutline />
        </IconButton>
      </Grid>
    </Card>
  );
};

export default AddCommentCard;
