import { configureStore } from '@reduxjs/toolkit';
import monsterReducer from '../features/monsterblock/monsterSlice';

export const store = configureStore({
  reducer: {
    monster: monsterReducer,
  },
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch