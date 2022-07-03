import PropTypes from 'prop-types';

import ContactListItem from '../ContactListItem';
import './ContactList.module.css';

const ContactList = ({ items }) => {
  return (
    <ul>
      {items.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default ContactList;
