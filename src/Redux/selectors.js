import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.filter;

export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

// export const getFilteredContacts = ({ contacts, filter }) => {
//   if (!filter) {
//     return contacts;
//   }
//   const normalizedFilter = filter.toLowerCase();
//   const result = contacts.filter(({ name }) => {
//     return name.toLowerCase().includes(normalizedFilter);
//   });
//   return result;
// };

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, query) => {
    const fiter = query
      ? contacts.filter(contact => contact.name.toLowerCase().includes(query))
      : contacts;

    return fiter;
  }
);
