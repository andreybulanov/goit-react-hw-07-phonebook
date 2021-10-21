import { useSelector } from 'react-redux';
import { useFetchContactsQuery, useDeleteContactMutation } from '../../Store/contactsSlice';
import { getFilter } from '../../Selectors/contacts-selectors';
import { List, ListItem } from './ContactsList.styled';
import { Button } from '../Buttons/Buttons.styled';

function ContactsList() {
  const { data: contactList } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const filterValue = useSelector((state) => getFilter(state));
   const contacts = contactList?.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue)
  );

  return (
    <div>
      <List>
        {contactList && contacts.map(({ id, name, number }) => (
          <ListItem key={id}>
              {name} - {number}{' '}
              <Button type="button" onClick={() => deleteContact(id)}>
                Delete
              </Button>
            </ListItem>
        )
        )}
      </List>
    </div>
  );
}

export default ContactsList;