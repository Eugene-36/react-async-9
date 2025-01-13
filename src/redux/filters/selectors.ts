import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = (state) => state.contacts.items;
export const selectValue = (state) => state.filters.status;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectValue],
  (contacts, statusFilter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(statusFilter.toLowerCase())
    );
  }
);
