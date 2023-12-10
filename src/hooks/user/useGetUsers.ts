import { useEffect } from 'react';
import { getUsers } from '../../store/slices/user/thunks';
import { useSelectorAndDispatch } from '../useSelectorAndDispatch';

export const useGetUsers = () => {
  const { dispatch, users } = useSelectorAndDispatch();
  const { isLoading, usersData } = users;

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return {
    isLoading,
    usersData,
    users,
    dispatch,
  };
};
