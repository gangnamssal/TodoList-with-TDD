import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Tasks {
  id: number;
  title: string;
}

const initialState: Tasks[] = [];

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTasks: (_, action: PayloadAction<Tasks[]>) => {
      return [...action.payload];
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { setTasks, deleteTask } = todoSlice.actions;
export default todoSlice.reducer;
