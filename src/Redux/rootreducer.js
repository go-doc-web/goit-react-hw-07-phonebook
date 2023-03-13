import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import contactsReducer from './Contacts/contacts-slice';
import filterReduser from './Filter/filter-slice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReduser,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['filter'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
