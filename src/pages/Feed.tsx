import { Grid } from '@chakra-ui/react';
import PostCard from '@containers/PostCard/PostCard';

const post = {
  id: 2,
  title: 'qui est ess',
  body: 'Hoje foi um dia incrível! Fui à praia com os amigos e conseguimos ver o pôr-do-sol mais lindo que já vi na vida. A energia estava maravilhosa. Que venham mais dias assim! 🌅 #Gratidão #PôrDoSol #MomentosInesquecíveis',
  createdAt: '17 de dezembro de 2024',
  user: {
    id: 1,
    nickname: 'joao_silva',
    photo: 'https://picsum.photos/200',
  },
};

const Feed = () => (
  <Grid gap="1rem">
    <PostCard {...post} />
  </Grid>
);

export default Feed;
