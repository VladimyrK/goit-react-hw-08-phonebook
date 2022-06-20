import PropTypes from 'prop-types';

import ContactListItem from '../ContactListItem';
import './ContactList.module.css';

const ContactList = ({ items }) => {
  return (
    <ul>
      {items.map(({ id, name, phone }) => (
        <ContactListItem key={id} id={id} name={name} phone={phone} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default ContactList;
