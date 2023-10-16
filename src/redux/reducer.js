import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { contactSlice } from './sliceContact';

export const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

export const persistReducerContacts = persistReducer(
  persistConfig,
  contactSlice.reducer
);
