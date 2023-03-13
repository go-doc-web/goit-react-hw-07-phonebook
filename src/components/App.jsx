import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContact } from '../Redux/operations';
import { selectIsLoading, selectError } from '../Redux/selectors';

import ContactsList from './ContactsList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';
import ContactsForm from './ContactsForm/ContactsForm';

import css from './App.module.css';

const styleApp = {
  fontSize: 32,
  color: '#010101',
};

const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);
  return (
    <div style={styleApp} className={css.app}>
      <div className={css.container}>
        <div className={css.phonebook}>
          <h2>Phonebook</h2>

          <ContactsForm />
        </div>
      </div>
      <div className={css.container}>
        <div className={css.contacts}>
          <h2>Contacts</h2>
          <ContactFilter />
          {isLoading && !error && <p>Loading</p>}
          <ContactsList />
        </div>
      </div>
    </div>
  );
};

export default App;
