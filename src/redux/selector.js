import { createSelector } from "@reduxjs/toolkit"

export const selectorContact = state => state.contacts.contacts

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectorFilter = state => state.filter;

export const selectorFilteredContact = createSelector(
    [selectorContact, selectorFilter],
    (contacts, filter) =>

    
        contacts
            ? contacts.filter((contact) =>
                contact.name.toLowerCase().includes(filter.toLowerCase())
            )
            : contacts
)
