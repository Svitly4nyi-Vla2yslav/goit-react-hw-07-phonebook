import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { ContactForm } from '../ContactForm/ContactForm';
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading} from 'redux/selector';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export function App() {
  const dispatch = useDispatch()
  const isLoading = useSelector(selectIsLoading)
  const error = useSelector(selectError)

  useEffect(() => {
    dispatch(fetchContacts())
  },[dispatch])

  return (
    <div>
      <h1 className='Phonebook__title'>Phonebook</h1>
      <ContactForm />
      <h2 className='Phonebook__title'>Contacts</h2>
      <Filter />
      <ContactList />
      {isLoading && !error}
    </div>
  );
}


