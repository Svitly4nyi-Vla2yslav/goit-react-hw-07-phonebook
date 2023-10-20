
import { nanoid } from 'nanoid';
import { useState } from "react";
import './ContactForm.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectorContact } from 'redux/selector';
import { addContact } from 'redux/operations';


export function ContactForm() {
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')


  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;

    }
  }

  const dispatch = useDispatch();
  const contacts = useSelector(selectorContact);

  const handleInputSubmit = event => {
    event.preventDefault();

    if (contacts.some(contact => contact.name === name)) {
      alert(`'${name}' is already in contacts`);
      return;
    }

    if (contacts.some(contact => contact.number === number)) {
      alert(`'${number}' is already in contacts`);
      return;
    }


    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())



    dispatch(addContact(newContact));


    setName('');
    setNumber('');
  };


  return (
    <div>
      <form onSubmit={handleInputSubmit} className='Container__form'>
        <label className='text'>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className='text'>
          Number
          <input
            type="tel"
            value={number}
            onChange={handleChange}
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className='Add__contact'>Add contact</button>
      </form>
    </div>
  )
  // }

}

// if (name.trim() === '' || number.trim() === '') {
//   alert('Please enter a valid name and number.');
//   return;
// }

// if (contacts.some(contact => contact.name === name)) {
//   alert(`'${name}' is already in contacts`);
//   return;
// }