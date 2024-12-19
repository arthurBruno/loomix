import IUser from 'types/users/IUser';
import TAllUsers from 'types/users/TAllUsers';

interface IUsersContext {
  loggedUser?: IUser;
  allUsers: TAllUsers;
  isUsersLoading: boolean;
}

export const UsersContextDefaultValues = {
  loggedUser: undefined,
  allUsers: {},
  isUsersLoading: true,
};

export default IUsersContext;
