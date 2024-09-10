import { createSlice } from '@reduxjs/toolkit';

interface MateriasState {
  clicks: number;
}

const initialState: MateriasState = {
  clicks: 0,
};

export const MateriasSlice = createSlice({
  name: 'Materias',
  initialState,
  reducers: {
    addMateria(state) {
      state.clicks++;
    },
  },
});

export const { addMateria } = MateriasSlice.actions;

export default MateriasSlice.reducer;
