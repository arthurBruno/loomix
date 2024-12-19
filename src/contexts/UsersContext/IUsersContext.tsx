import IUser from 'types/users/IUser';
import TAllUsers from 'types/users/TAllUsers';

interface IUsersContext {
  loggedUser?: IUser;
  allUsers: TAllUsers;
  isAllUsersLoading: boolean;
}

export const UsersContextDefaultValues = {
  loggedUser: undefined,
  allUsers: {},
  isAllUsersLoading: true,
};

export default IUsersContext;
