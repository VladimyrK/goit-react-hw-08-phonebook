import { useSelector, useDispatch } from 'react-redux';

import { addFilter, addContact } from '../redux/contactsSlice';

import ContactForm from './Contacts/ContactForm';
import ContactList from './Contacts/ContactList';
import Filter from './Contacts/Filter';

function App() {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const filterContacts = () => {
    const filterToLowerCase = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterToLowerCase)
    );
  };

  const filteredContacts = filterContacts();

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={e => dispatch(addContact(e))} />
      <h2>Contacts</h2>
      <Filter
        value={filter}
        onFilter={e => dispatch(addFilter(e.currentTarget.value))}
      />
      <ContactList items={filteredContacts} />
    </div>
  );
}

export default App;
