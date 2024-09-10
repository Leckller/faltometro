import { configureStore } from '@reduxjs/toolkit';
import MateriasReducer from './Reducers/Materias';

export const store = configureStore({
  reducer: {
    Materias: MateriasReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
