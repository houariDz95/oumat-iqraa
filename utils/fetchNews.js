import axios from 'axios';

const BASE_URL = "https://arabic-news-api.p.rapidapi.com";


export const fetchNews = async (url) => {
  const options = {
    headers: {
      'X-RapidAPI-Key': '4844e827bbmshb9b6f82534db67fp10aac7jsnb4dbf81ae51e',
      'X-RapidAPI-Host': 'arabic-news-api.p.rapidapi.com'
    },
  };
  
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
