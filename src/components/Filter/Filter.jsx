import React from 'react'
import './Filter.css'
import { useDispatch, useSelector } from 'react-redux';
import { filterContact, getFilter } from 'redux/sliceContact';
export const Filter = () => {
    const dispatch = useDispatch();

    const value = useSelector(getFilter);

    const onChange = e => {
        dispatch(filterContact(e.currentTarget.value.trim()));
    };

    return (
        <div>
            <label className='Filter_text'>
                Find contacts by Name
                <input
                    type="text"
                    value={value}
                    onChange={onChange}
                />
            </label>
        </div>
    )
}

