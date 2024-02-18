import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './Estilos';

// Componente del Cóctel
const CocktailCard = ({ cocktailData }) => (
  <View style={styles.cocktailCard}>
    {cocktailData.strDrinkThumb ? (
      <Image
        style={styles.cocktailImage}
        resizeMode="contain"
        source={{ uri: cocktailData.strDrinkThumb + '/preview' }}
      />
    ) : (
      <Text>Imagen no disponible</Text>
    )}
    <View style={styles.cocktailDetails}>
      <Text style={styles.cocktailName}>{cocktailData.strDrink}</Text>
      <Text style={styles.cocktailDescription}>{cocktailData.strInstructions}</Text>
    </View>
  </View>
);

export { CocktailCard };