import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Popups } from '../../types/Popup';

interface PopupState {
  visible: boolean;
  type: Popups
}

const initialState: PopupState = {
  visible: false,
  type: 'create',
};

export const PopupSlice = createSlice({
  name: 'Popup',
  initialState,
  reducers: {
    toggleVisible(state) {
      state.visible = !state.visible;
    },
    setPopupType(state, action: PayloadAction<'create'>) {
      state.type = action.payload;
    },
  },
});

export const { toggleVisible, setPopupType } = PopupSlice.actions;

export default PopupSlice.reducer;
