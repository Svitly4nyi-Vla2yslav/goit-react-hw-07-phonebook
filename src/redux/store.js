import { configureStore} from '@reduxjs/toolkit';
import persistStore from 'redux-persist/es/persistStore';
// import { persistReducerContacts } from './reducer';
import { filtersReducer } from './filtersSlice';
import { contactsReducer } from './sliceContact';



export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false, // вимкнення перевірки на серіалізованість
    })
});
export const persistor = persistStore(store);

