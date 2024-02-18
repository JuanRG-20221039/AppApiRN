import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { CocktailCard } from './Componentes';
import { fetchCocktailData } from './Funciones';

const CocktailList = () => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    fetchCocktailData();
  }, []);

  const fetchCocktailData = async () => {
    try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
      const data = await response.json();
      setCocktails(data.drinks);
    } catch (error) {
      console.error('Error al obtener datos de cócteles:', error);
    }
  };

  return (
    <FlatList
      data={cocktails}
      keyExtractor={(item) => item.idDrink}
      renderItem={({ item }) => <CocktailCard cocktailData={item} />}
    />
  );
};

export { CocktailList };