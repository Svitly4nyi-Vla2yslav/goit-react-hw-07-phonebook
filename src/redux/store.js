import { configureStore} from '@reduxjs/toolkit';
import persistStore from 'redux-persist/es/persistStore';
import { persistReducerContacts } from './reducer';

export const store = configureStore({
  reducer: {
    contacts: persistReducerContacts,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false, // вимкнення перевірки на серіалізованість
    }),
});
export const persistor = persistStore(store);
