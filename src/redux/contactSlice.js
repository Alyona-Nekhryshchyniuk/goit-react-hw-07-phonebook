import { createSlice, nanoid } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const contactSlice = createSlice({
  name: 'contact',
  initialState: [],
  extraReducers: builder => {
    builder
      .addCase({
        [addContact.pending](state, action) {},
        [addContact.fulfilled](state, action) {},
        [addContact.rejected](state, action) {},
      })
      .addCase({
        [deleteContact.pending](state, action) {},
        [deleteContact.fulfilled](state, action) {},
        [deleteContact.rejected](state, action) {},
      });
  },

  // addContact: {
  //   reducer(state, action) {
  //     state.push(action.payload);
  //   },
  //   prepare({ name, number }) {
  //     return { payload: { id: nanoid(), name, number } };
  //   },
  // },

  // deleteContact(state, action) {
  //   return state.filter(contact => action.payload !== contact.id);
  // },
});

export const contactReducer = contactSlice.reducer;
export const { addContact, deleteContact } = contactSlice.actions;
