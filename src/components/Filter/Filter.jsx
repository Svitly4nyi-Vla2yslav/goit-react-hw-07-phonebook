import React from 'react'
import './Filter.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectorFilter } from 'redux/selector';
import { setStatusFilter } from 'redux/filtersSlice';

export const Filter = () => {
    const dispatch = useDispatch();

    const filter = useSelector(selectorFilter);

    const onChange = e => {
        dispatch(setStatusFilter(e.currentTarget.value.trim()));
    };

    return (
        <div>
            <label className='Filter_text'>
                Find contacts by Name
                <input
                    type="text"
                    value={filter}
                    onChange={onChange}
                />
            </label>
        </div>
    )
}

