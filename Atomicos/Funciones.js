import axios from 'axios';

// Función para obtener datos de la API
const fetchCocktailData = async () => {
  try {
    const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    return response.data.drinks[0];
  } catch (error) {
    console.error('Error al obtener datos del cóctel:', error);
    return null;
  }
};

// Función para obtener una lista de cócteles
const fetchCocktailList = async (numCocktails) => {
  try {
    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`);
    const cocktails = response.data.drinks.slice(0, numCocktails);
    return cocktails;
  } catch (error) {
    console.error('Error al obtener la lista de cócteles:', error);
    return [];
  }
};

export { fetchCocktailData, fetchCocktailList };