import React from 'react'
import './ContactList.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectorFilteredContact } from 'redux/selector'
import { deleteContact } from 'redux/operations'

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectorFilteredContact)
    const handleDelete = (id) => dispatch(deleteContact(id))
    return (
        <>
        {contacts.length ? (
             <ul>
            {contacts.map(({ name, number, id}) => (
                <li className='Contact__item' key={id}>{name} : <span className='Number'>{number}</span>
                    <button className='Delete' onClick={() => handleDelete(id)}>Delete</button>
                </li>
            ))}
        </ul>) : (
            <p className='Number' > No contacts </p>
        )}
       </>
    )
}



