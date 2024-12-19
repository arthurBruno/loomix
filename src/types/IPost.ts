import IUser from './IUser';

interface IPost {
  id: number;
  title: string;
  body: string;
  createdAt: string;
  user: IUser;
}

export default IPost;
