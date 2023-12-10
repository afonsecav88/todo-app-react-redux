import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { User, UserData } from '../../../interfaces/interfaces';

const initialState: User = {
  isLoading: false,
  page: 1,
  usersData: {
    page: 0,
    per_page: 6,
    total: 12,
    total_pages: 2,
    data: [],
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoadingUsers: (state) => {
      state.isLoading = true;
    },
    getUsersInfo: (state, action: PayloadAction<UserData>) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.usersData = action.payload;
      console.log(state.isLoading);
    },
  },
});
// Action creators are generated for each case reducer function
export const { setLoadingUsers, getUsersInfo } = userSlice.actions;
