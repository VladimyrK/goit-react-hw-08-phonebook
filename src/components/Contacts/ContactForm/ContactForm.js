import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';

import './ContactForm.module.css';

function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [id, setId] = useState(() => nanoid());

  const handleSubmit = e => {
    e.preventDefault();

    setId(nanoid());
    onSubmit({ name, number, id });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
    setId(nanoid());
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.currentTarget.value)}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={e => setNumber(e.currentTarget.value)}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button>Add contact</button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ContactForm;
