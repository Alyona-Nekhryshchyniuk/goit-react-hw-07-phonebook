import { createSlice, nanoid } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const contactSlice = createSlice({
  name: 'contact',
  initialState: { items: [], isloading: false, error: null },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isloading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items.push(...action.payload);
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isloading = false;
        console.log(action.payload);
        state.error = action.payload;
      })
      .addCase(addContact.pending, state => {
        state.isloading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, state => {
        state.isloading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          contact => action.payload.id !== contact.id
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
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
// export const { addContact, deleteContact } = contactSlice.actions;
