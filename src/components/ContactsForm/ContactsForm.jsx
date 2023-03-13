import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addContact } from '../../Redux/operations';
import { getContacts } from '../../Redux/selectors';

import css from './ContactsForm.module.css';

const ContactsForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const allContacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const handleReset = () => {
    setName('');
    setPhone('');
  };
  const dublicate = name => {
    const normalisedName = name.toLocaleLowerCase();
    const dublContact = allContacts.find(
      ({ name }) => name.toLowerCase() === normalisedName
    );
    return Boolean(dublContact);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newContacts = { name, phone };
    if (dublicate(name)) {
      alert(`${name} is already in contacts`);
      // handleReset();
      return;
    }
    dispatch(addContact(newContacts));
    handleReset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.titleInputForm}>
        <span>Name</span>
        <input
          onChange={e => setName(e.target.value)}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          placeholder="Fedor Fedorov"
        />
      </label>
      <label className={css.titleInputForm}>
        <span>Number</span>
        <input
          onChange={e => setPhone(e.target.value)}
          type="tel"
          name="phone"
          value={phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="227-91-26"
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactsForm;
