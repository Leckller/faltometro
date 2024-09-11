import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAula } from '../../types';

interface MateriasState {
  materias: IAula[];
}

const initialState: MateriasState = {
  materias: (new Array(5)
    .fill({
      className: 'teste',
      completed: new Array(5).fill(null).map(() => ({ date: undefined, notes: 'Esse dia aqui bahaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabahaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabahaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabahaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabahaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' })),
      title: 'calc',
      id: 0 }) as IAula[]).map((m) => ({ ...m, id: Math.random() * 9999 })),
};

export const MateriasSlice = createSlice({
  name: 'Materias',
  initialState,
  reducers: {
    addMateria(state, actions: PayloadAction<IAula>) {
      if (state.materias.some((m) => m.id === actions.payload.id)) {
        return;
      }
      state.materias.push(actions.payload);
    },
    toggleClassFinished(state, actions: PayloadAction<number>) {
      // Classe correspondente ao id
      const className = state.materias.find((m) => m.id === actions.payload);
      if (!className) {
        return;
      }
      // Procura de trás para frente por uma data preenchida
      const verifyDate = className.completed.reverse().find((m) => m.date !== undefined);
      if (verifyDate
        && verifyDate.date!.toLocaleDateString() === new Date().toLocaleDateString()) {
        verifyDate.date = undefined;
        return;
      }

      // Primeira aula incompleta
      const classFinished = className.completed.find((m) => m.date === undefined);
      if (!classFinished) {
        return;
      }
      classFinished.date = new Date();
    },
  },
});

export const { addMateria, toggleClassFinished } = MateriasSlice.actions;

export default MateriasSlice.reducer;
