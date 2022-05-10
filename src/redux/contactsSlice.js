import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: JSON.parse(window.localStorage.getItem('contacts')) ?? [],
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.find(
        contact =>
          contact.name.toLowerCase() === action.payload.name.toLowerCase()
      )
        ? alert('This name already in contacts')
        : (state.contacts = [...state.contacts, action.payload]);
      window.localStorage.setItem('contacts', JSON.stringify(state.contacts));
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
      window.localStorage.setItem('contacts', JSON.stringify(state.contacts));
    },
    addFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addFilter, addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
