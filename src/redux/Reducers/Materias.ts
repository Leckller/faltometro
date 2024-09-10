import { PayloadAction, createSlice } from '@reduxjs/toolkit';

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
    addMateria(_state, _action: PayloadAction) {
      // TO-DO
    },
  },
});

export const { addMateria } = MateriasSlice.actions;

export default MateriasSlice.reducer;
