import React, { useState, useEffect } from 'react';
import { StatusBar, FlatList, Image } from 'react-native';
import { Text, View } from 'react-native';
import { CocktailCard } from './Atomicos/Componentes';
import { styles } from './Atomicos/Estilos';
import { fetchCocktailList } from './Atomicos/Funciones';

export default function App() {
  const [cocktailList, setCocktailList] = useState([]);

  useEffect(() => {
      fetchCocktailList(35).then((cocktails) => {
      setCocktailList(cocktails);
    });
  }, []);

  const renderCocktailCard = ({ item }) => (
    <CocktailCard cocktailData={item} />
  );

  return (
    <View style={styles.container}>
      {/* Barra Superior */}
      <View style={styles.topBar}>
        <Image
          source={require('./img/logo.png')}
          style={styles.topBarImage}
          resizeMode="contain"
        />
      </View>

      {/* Cuerpo de la Aplicación */}
      <View style={styles.flatListContainer}>
        <FlatList
          data={cocktailList}
          keyExtractor={(item) => item.idDrink}
          renderItem={renderCocktailCard}
        />
      </View>

      {/* Barra Inferior */}
      <View style={styles.bottomBar}>
        <Text style={styles.datosAl}>Juan de dios Rodriguez Grande || AppApi</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}