import {
  default as PropTypes,
  Input,
  useDispatch,
  useSelector,
  setFilterValue,
} from '../../components';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <label>
      Find contacts by name <br />
      <Input
        onChange={e => {
          dispatch(setFilterValue(e.target.value));
        }}
        // All state goes to useSelector(), not only filter!
        value={useSelector(state => state.filter)}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
