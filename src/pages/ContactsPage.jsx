import { useSelector, useDispatch } from 'react-redux';
import {
  useFetchContactsQuery,
  useCreateContactMutation,
} from '../redux/contactsSlice';
import { addFilter } from '../redux/filterSlice';
import { toast, Toaster } from 'react-hot-toast';

import ContactForm from '../components/Contacts/ContactForm';
import ContactList from '../components/Contacts/ContactList';
import Filter from '../components/Contacts/Filter';

function ContactsPage() {
  const { data: contacts } = useFetchContactsQuery();
  const [createContact] = useCreateContactMutation();
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    createContact([
      e.currentTarget.elements.name.value,
      e.currentTarget.elements.phone.value,
    ]);
    e.currentTarget.reset();

    toast.success('Заметка создана!');
  };

  const filterContacts = () => {
    const filterToLowerCase = filter.toLowerCase();

    let filteredContacts = [];
    if (contacts) {
      filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterToLowerCase)
      );
    }
    return filteredContacts;
  };

  const filteredContacts = filterContacts();

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter
        value={filter}
        onFilter={e => dispatch(addFilter(e.currentTarget.value))}
      />
      {contacts && <ContactList items={filteredContacts} />}
      <Toaster position="top-center" />
    </div>
  );
}

export default ContactsPage;
