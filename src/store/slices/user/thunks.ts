import { Dispatch } from 'react';
import { getUsersInfo, setLoadingUsers } from './userSlice';
import { UnknownAction } from '@reduxjs/toolkit';
import { userApi } from '../../../api/usersApi';
import { UserData } from '../../../interfaces/interfaces';

export const getUsers = (page: number = 0) => {
  return async (dispatch: Dispatch<UnknownAction>) => {
    dispatch(setLoadingUsers());
    if (page === 3) return;
    const resp = await userApi.get<UserData>(`users?page=${page + 1}`);
    const { data } = resp;
    dispatch(getUsersInfo(data));
  };
};
