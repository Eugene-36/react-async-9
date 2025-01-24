import { useAppDispatch } from '../../redux/hooks';
import { useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/filters/filtersSlice';
import { selectValue } from '../../redux/filters/selectors';

export const SearchBox = () => {
  const dispatch = useAppDispatch();
  const searchValue = useSelector(selectValue);
  return (
    <div className='search-input'>
      <label htmlFor=''>Search by name</label>
      <input
        type='text'
        value={searchValue}
        onChange={(e) => dispatch(selectNameFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
