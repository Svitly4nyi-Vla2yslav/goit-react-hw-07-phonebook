import React from 'react'
import './ContactList.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteContact, getContacts, getFilter } from 'redux/sliceContact';

export const ContactList = () => {

 const dispatch = useDispatch();
 const contacts = useSelector(getContacts);

 const valueFilter = useSelector(getFilter);
    
 const onDelete = contactId => {
        dispatch(deleteContact(contactId))
 }
    
 const findContact = () => {
        const normalizeFilter = valueFilter.toLowerCase();
        return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizeFilter),)
}

const findeContact = findContact();
    return (
        <>
        {findeContact.length ? (
             <ul>
            {findeContact.map(({ name, number, id}) => (
                <li className='Contact__item' key={id}>{name} : <span className='Number'>{number}</span>
                    <button className='Delete' onClick={() => onDelete(id)}>Delete</button>
                </li>
            ))}
        </ul>) : (
            <p className='Number' > No contacts </p>
        )}
       </>
    )
}

// ContactList.propTypes = {
//     contacts: PropTypes.array.isRequired,
//     onDeleteContact: PropTypes.func.isRequired
// }
   // const useLocalStorage = (key, defaultValue) => {
    //     const [state, setState] = useState(() => {
    //       return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
    //     });
    
    //     useEffect(() => {
    //       window.localStorage.setItem(key, JSON.stringify(state));
    //     }, [key, state]);
    //     return [state, setState]
    //   }
    
    //   const [contacts, setContacts] = useLocalStorage('contacts', '');
    //   const [filter, setFilter] = useState('');
    
    
    //   const handleAddContact = newContact => {
    //     setContacts(prevState => [...prevState, newContact]);
    
    //   };
    
    
    //   const changeFilter = (event) => {
    //     setFilter(event.currentTarget.value)
    //   }