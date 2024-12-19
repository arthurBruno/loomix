import { useParams } from 'react-router-dom';

const Post = () => {
  const { postId } = useParams();

  return (
    <>
      <div>Página de post específico</div>
      <div>Post escolhido: {postId}</div>
    </>
  );
};

export default Post;
