import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { setFilter } from '../../Redux/Filter/filter-slice';
import { getFilter } from '../../Redux/Filter/filter-selectors';

import css from './ContactFilter.module.css';

const ContactFilter = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();
  const handleFilterChange = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <div className="{css.wrapper}">
      <label className={css.titleFilter}>*Find contact by name</label>
      <input
        onChange={handleFilterChange}
        type="text"
        name="filter"
        placeholder="Find me"
        value={filter}
      />
    </div>
  );
};

export default ContactFilter;
