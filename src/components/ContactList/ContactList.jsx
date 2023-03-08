import {
  default as PropTypes,
  Button,
  List,
  ListItem,
  RiContactsLine,
  RiDeleteBin6Line,
  useDispatch,
  deleteContact,
  useSelector,
} from '../../components';

const ContactList = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter);

  const loweredFilter = filterValue.toLowerCase();
  const contactList = useSelector(state => state.contact);

  const filteredList = contactList.filter(({ name }) =>
    name.toLowerCase().includes(loweredFilter)
  );

  return (
    <>
      <List>
        {filteredList.map(({ name, id, number }) => {
          return (
            name && (
              <ListItem key={id}>
                <div>
                  <RiContactsLine color="color=#ffee7d" /> {name}: {number}
                </div>
                <Button
                  onClick={() => {
                    dispatch(deleteContact(id));
                  }}
                >
                  {' '}
                  <RiDeleteBin6Line
                    style={{
                      fill: '#ffee7d',
                      width: '18px',
                      height: '18px',
                    }}
                  />{' '}
                  Delete
                </Button>
              </ListItem>
            )
          );
        })}
      </List>
    </>
  );
};
ContactList.defaultProps = {
  contacts: [],
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  deleteContact: PropTypes.func,
};
export default ContactList;
