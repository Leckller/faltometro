import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Popups } from '../../types/Popup';

interface PopupState {
  visible: boolean;
  type: Popups;
  name: string;
}

const initialState: PopupState = {
  visible: false,
  type: 'create',
  name: 'Adicionar matéria',
};

export const PopupSlice = createSlice({
  name: 'Popup',
  initialState,
  reducers: {
    toggleVisible(state) {
      state.visible = !state.visible;
    },
    setPopupType(state, action: PayloadAction<{ type: Popups, name: string }>) {
      state.type = action.payload.type;
      state.name = action.payload.name;
    },
  },
});

export const { toggleVisible, setPopupType } = PopupSlice.actions;

export default PopupSlice.reducer;
