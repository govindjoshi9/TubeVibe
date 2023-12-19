import axios from 'axios';
const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  method: "GET",
  url: BASE_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "aabf6a856dmsh972c58e1f638bdap1a6af4jsn7b9ded544c75",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}
