import { useDispatch, useSelector } from 'react-redux';
import { getFilteredContacts } from '../../Redux/selectors';
import { deleteContact } from '../../Redux/operations';

import css from './ContactsList.module.css';

const ContactsList = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const removeContact = id => {
    dispatch(deleteContact(id));
  };

  const contact = filteredContacts.map(({ id, name, phone }) => (
    <li key={id} className={css.item}>
      {name}: {phone}
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
