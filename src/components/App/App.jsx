import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { ContactForm } from '../ContactForm/ContactForm';
import './App.css'

export function App() {

  return (
    <div>
      <h1 className='Phonebook__title'>Phonebook</h1>
      <ContactForm />
      <h2 className='Phonebook__title'>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}


