import { useDispatch, useSelector } from 'react-redux';
import { getFilteredContacts } from '../../Redux/Contacts/contacts-selectors';
import { deleteContact } from '../../Redux/Contacts/contacts-slice';

import css from './ContactsList.module.css';

const ContactsList = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const removeContact = id => {
    dispatch(deleteContact(id));
  };

  const contact = filteredContacts.map(({ id, name, number }) => (
    <li key={id} className={css.item}>
      {name}: {number}
      <button
        className={css.btnDelete}
        onClick={() => removeContact(id)}
        type="button"
      >
        X
      </button>
    </li>
  ));
  return <ul className="list">{contact}</ul>;
};

export default ContactsList;
