import axios from 'axios';

const BASE_URL = "https://arabic-books-library.p.rapidapi.com";

export const fetchFromAPI = async (url, currentPage) => {
  const options = {
    headers: {
      'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDE_API_KEY,
      'X-RapidAPI-Host': 'arabic-books-library.p.rapidapi.com',
    },
    params: {page: currentPage},
  };
  
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

