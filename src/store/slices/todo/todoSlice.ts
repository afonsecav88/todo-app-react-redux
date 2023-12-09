import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../../../interfaces/interfaces';

// const initializer = () => JSON.parse(localStorage.getItem('Tasks')!) || [];
const initialState: Task[] = [];

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const payload: Task = {
        id: Math.random(),
        description: action.payload,
        state: false,
      };
      state.push(payload);
    },
    editTask: (state, action: PayloadAction<Task>) => {
      state.map((task) => {
        task.id === action.payload.id ? action.payload : task;
      });
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.filter((task) => task.id !== action.payload);
    },
  },
});
// Action creators are generated for each case reducer function
export const { addTask, editTask, deleteTask } = todoSlice.actions;
// export default todoSlice.reducer;
