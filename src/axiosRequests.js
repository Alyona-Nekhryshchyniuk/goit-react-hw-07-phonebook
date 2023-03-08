import axios from 'axios';

axios.defaults.baseURL = '';

export const postContact = data => {
  return axios.post('/contacts', data);
};

export const fetchAll = () => {
  return axios.get('/contacts');
};

export const deleteContact = id => {
  return axios.delete('/contacts', id);
};
