import { configureStore} from '@reduxjs/toolkit';
import persistStore from 'redux-persist/es/persistStore';
import { persistReducerContacts } from './reducer';

// const customMiddleware = (state) => {
//   return (next) => {
//     return (action) => {
//       return next(action)
//     }
//   }
// }

export const store = configureStore({
  reducer: {
    contacts: persistReducerContacts,
  },
  // middleware: [customMiddleware],
});
export const persistor = persistStore(store);

// getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: false, // вимкнення перевірки на серіалізованість
//     })