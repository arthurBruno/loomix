import IReqUser from 'types/users/IReqUser';
import IUser from 'types/users/IUser';

const mountUser = ({
  id,
  name,
  username,
  email,
  phone,
  website,
}: IReqUser): IUser => ({
  id,
  name,
  nickname: username,
  email,
  phone,
  website,
  photo: `https://picsum.photos/20${id}`,
});

export default mountUser;
