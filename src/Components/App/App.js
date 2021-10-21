import { PrimaryTitle, SecondaryTitle } from './App.styled.jsx';
import ContactsForm from '../ContactsForm/ContactsForm';
import ContactsList from '../ContactsList/ContactsList';
import Filter from '../Filter/Filter';

export function App() {
  return (
    <>
      <PrimaryTitle>Phonebook</PrimaryTitle>
      <ContactsForm />

      <SecondaryTitle>Contacts</SecondaryTitle>
      <Filter />
      <ContactsList />
    </>
  );
}
