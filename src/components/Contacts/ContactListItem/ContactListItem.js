import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';

// import { deleteContact } from '../../../redux/contactsSlice';
import { useDeleteContactMutation } from '../../../redux/contactsSlice';

import './ContactListItem.module.css';

function ContactListItem({ id, phone, name }) {
  // const dispatch = useDispatch();
  const [deleteTodo] = useDeleteContactMutation();

  return (
    <li>
      <p>
        {name}: {phone}
      </p>
      <button type="button" onClick={() => deleteTodo(id)}>
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string,
  phone: PropTypes.string,
  number: PropTypes.string,
};

export default ContactListItem;
