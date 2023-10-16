import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initalState';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },

    deleteContact(state, action) {
      const contactId = action.payload
      state.contacts = state.contacts.filter(
        contact => contact.id !== contactId
      );
    },
    filterContact(state, action) {
        state.filter = action.payload;
    }
  },
});

export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.contacts.filter;

export const {addContact, deleteContact, filterContact} = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;