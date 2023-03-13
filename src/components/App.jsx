import ContactsList from './ContactsList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';
import ContactsForm from './ContactsForm/ContactsForm';

import css from './App.module.css';

const styleApp = {
  fontSize: 32,
  color: '#010101',
};

const App = () => {
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
          <ContactsList />
        </div>
      </div>
    </div>
  );
};

export default App;
