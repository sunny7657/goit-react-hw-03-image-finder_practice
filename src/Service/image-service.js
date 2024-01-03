import axios from 'axios';

const API_KEY = '40411285-e0a8815789142127d1d60a3c2';
axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'horizontal',
  per_page: 12,
  image_type: 'photo',
};

export const getImages = async (query, page) => {
  const { data } = await axios.get(`?q=${query}&page=${page}`);
  return data;
};
