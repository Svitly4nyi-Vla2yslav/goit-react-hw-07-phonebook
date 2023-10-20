import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initalState';
import { addContact, deleteContact, fetchContacts } from './operations';


const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.rejected, handleRejected)

      .addCase(addContact.pending, handlePending)
      .addCase(addContact.rejected, handleRejected)

      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.rejected, handleRejected)

      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload;
      })

      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.push(action.payload);
      })

      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.contacts.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.splice(index, 1);
      });
    }
})

export const contactsReducer = contactSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// import { fetchContacts } from "./operations";

// const tasksSlice = createSlice({
//   name: "tasks",
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: {
//     [fetchContacts.pending](state) {
//       state.isLoading = true;
//     },
//     [fetchContacts.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//     },
//     [fetchContacts.rejected](state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const tasksReducer = tasksSlice.reducer;


//   name: 'contacts',
//   initialState,
//   reducers: {
//     addContact(state, action) {
//       state.contacts.push(action.payload);
//     },

//     deleteContact(state, action) {
//       const contactId = action.payload
//       state.contacts = state.contacts.filter(
//         contact => contact.id !== contactId
//       );
//     },
//     filterContact(state, action) {
//         state.filter = action.payload;
//     }
//   },


