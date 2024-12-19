import { useParams } from 'react-router-dom';

const UserPosts = () => {
  const { userId } = useParams();

  return (
    <>
      <div>Página de posts do usuário</div>
      <div>Usuário escolhido: {userId}</div>
    </>
  );
};

export default UserPosts;
