import axios from 'axios';

const BASE_URL = "https://arabic-books-library.p.rapidapi.com";


export const fetchFromAPI = async (url, currentPage) => {
  const options = {
    headers: {
      'X-RapidAPI-Key': '4844e827bbmshb9b6f82534db67fp10aac7jsnb4dbf81ae51e',
      'X-RapidAPI-Host': 'arabic-books-library.p.rapidapi.com',
    },
    params: {page: currentPage},
  };
  
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};