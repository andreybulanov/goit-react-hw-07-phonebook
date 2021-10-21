import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const addContact = createAction('contact/ADD', ({ name, number }) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

export const removeContact = createAction('contact/REMOVE');

export const filterContact = createAction('contact/HANDLE_FILTER');
