import axios from 'axios';

export default () => {
  return axios.create({
    baseURL:
      'https://newsapi.org/v2/top-headlines?country=us&apiKey=099148be22804e849a0c6fe022b7cf5e',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};
