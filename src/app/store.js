import { configureStore } from '@reduxjs/toolkit';
import monsterReducer from '../features/monsterblock/monsterSlice';

export const store = configureStore({
  reducer: {
    monster: monsterReducer,
  },
});
