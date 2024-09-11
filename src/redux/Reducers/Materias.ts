import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAula } from '../../types';

interface MateriasState {
  materias: IAula[];
}

const initialState: MateriasState = {
  materias: (new Array(5)
    .fill({
      className: 'teste',
      // eslint-disable-next-line max-len
      completed: new Array(5).fill(null).map(() => ({ date: undefined, notes: 'Esse dia aqui bahaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabahaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabahaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabahaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabahaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' })),
      title: 'calc',
      id: 0 }) as IAula[]).map((m) => ({ ...m, id: Math.random() * 9999 })),
};

export const MateriasSlice = createSlice({
  name: 'Materias',
  initialState,
  reducers: {
    addMateria(state, action: PayloadAction<IAula>) {
      if (state.materias.some((m) => m.id === action.payload.id)) {
        return;
      }
      state.materias.push(action.payload);
    },

    // Recebe um index opcional, caso receba ele altera o dia diretamente no index.
    // Caso não receba ele marca ou desmarca o primeiro dia não concluído
    toggleClassFinished(state, action: PayloadAction<{ id: number, index?: number }>) {
      // Classe correspondente ao id
      const { id, index } = action.payload;

      const className = state.materias.find((m) => m.id === id);
      if (!className) {
        return;
      }

      // Verifica se é para desmarcar ou marcar como concluído de acordo com o index passado
      if (index !== undefined) {
        if (className.completed[index].date) {
          className.completed[index].date = undefined;
          return;
        }
        className.completed[index].date = new Date();
        return;
      }

      // Procura de trás para frente por uma data preenchida
      // Se encontra seta ela como undefined (desmarcando o dia concluído)
      const verifyDate = className.completed
        .reverse().find((m) => m.date !== undefined);

      if (verifyDate
        && verifyDate.date!.toLocaleDateString() === new Date().toLocaleDateString()) {
        verifyDate.date = undefined;
        return;
      }

      // Primeira aula incompleta
      const classFinished = className.completed
        .find((m) => m.date === undefined);

      if (!classFinished) {
        return;
      }
      classFinished.date = new Date();
    },
  },
});

export const { addMateria, toggleClassFinished } = MateriasSlice.actions;

export default MateriasSlice.reducer;
