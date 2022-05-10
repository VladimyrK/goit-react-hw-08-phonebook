import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deleteContact } from '../../../redux/contactsSlice';

import './ContactListItem.module.css';

function ContactListItem({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <li>
      <p>
        {name}: {number}
      </p>
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactListItem;
