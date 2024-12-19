import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { userId } = useParams();

  return (
    <>
      <div>Página de perfil do usuário</div>
      <div>Usuário escolhido: {userId}</div>
    </>
  );
};

export default UserProfile;
