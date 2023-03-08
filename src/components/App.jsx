import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import { selectError } from 'redux/selectors';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const error = useSelector(selectError);
  console.log(error);
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h1>Contacts</h1>
      <Filter />
      {error && (
        <>
          <p>Oooops ...</p>
          <p>Contacts're stuck on the server.</p>
          <p>Use your phonebook some other time:(</p>
        </>
      )}
      <ContactList />
    </>
  );
};

export default App;
