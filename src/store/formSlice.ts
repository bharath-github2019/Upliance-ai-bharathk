import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Field {
  id: string;
  type: string;
  label: string;
  required: boolean;
}

interface FormState {
  currentForm: Field[];
  savedForms: any[];
}

const initialState: FormState = {
  currentForm: [],
  savedForms: []
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addField(state, action: PayloadAction<Field>) {
      state.currentForm.push(action.payload);
    }
  }
});

export const { addField } = formSlice.actions;
export default formSlice.reducer;
