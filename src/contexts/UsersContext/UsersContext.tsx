import { createContext, ReactNode, useContext, useMemo } from 'react';
import IUsersContext, { UsersContextDefaultValues } from './IUsersContext';
import { useQuery } from '@tanstack/react-query';
import UsersService from '@services/UsersService';
import { AxiosResponse } from 'axios';
import IReqUser from 'types/users/IReqUser';
import mountUser from '@utils/mountUser';

export const UsersContext = createContext<IUsersContext>(
  UsersContextDefaultValues,
);

interface IUsersProviderProps {
  children: ReactNode;
}

export const UsersProvider = ({ children }: IUsersProviderProps) => {
  const { data: allUsers, isFetching: isAllUsersLoading } = useQuery({
    queryKey: ['users'],
    queryFn: UsersService.get,
    select: ({ data }: AxiosResponse<IReqUser[]>) => {
      const allUsers = {};
      data.forEach((reqUser) => (allUsers[reqUser.id] = mountUser(reqUser)));
      return allUsers;
    },
  });

  const value = useMemo(
    () => ({
      loggedUser:
        allUsers && Object.values(allUsers).length > 0
          ? Object.values(allUsers)[0]
          : undefined,
      allUsers: allUsers ?? {},
      isAllUsersLoading,
    }),
    [isAllUsersLoading],
  );

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};

const useUsersContext = () => useContext(UsersContext);

export default useUsersContext;
