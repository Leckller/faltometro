import { configureStore } from '@reduxjs/toolkit';
import MateriasReducer from './Reducers/Materias';
import PopupReducer from './Reducers/Popup';

export const store = configureStore({
  reducer: {
    Materias: MateriasReducer,
    Popup: PopupReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
