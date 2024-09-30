import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API;

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(`${API_URL}popular`, {
      params: {
        api_key: API_KEY,
        language: 'pt-BR',
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Erro ao buscar filmes populares:', error);
    return [];
  }
};