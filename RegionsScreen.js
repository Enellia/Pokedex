import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const RegionsScreen = () => {
  const regionsData = [
    { id: '1', name: 'Kanto', image: 'https://www.pokepedia.fr/images/4/44/Kanto_LGPE.png' },
    { id: '2', name: 'Johto', image: 'https://www.pokepedia.fr/images/thumb/f/f2/Johto_HGSS.jpg/1200px-Johto_HGSS.jpg' },
    { id: '3', name: 'Hoenn', image: 'https://www.pokepedia.fr/images/4/4c/Carte_de_Hoenn_ROSA.png' },
    { id: '4', name: 'Sinnoh', image: 'https://www.pokepedia.fr/images/thumb/9/99/Sinnoh-DEPS.png/1200px-Sinnoh-DEPS.png' },
    { id: '5', name: 'Unys', image: 'https://www.pokepedia.fr/images/a/ae/Unys_-_NB2.png' },
    { id: '6', name: 'Kalos', image: 'https://www.pokepedia.fr/images/d/d1/Kalos_-_XY.png' },
    { id: '6', name: 'Alola', image: 'https://www.pokepedia.fr/images/4/4d/Alola_-_USUL.png' },
    { id: '7', name: 'Galar', image: 'https://www.pokepedia.fr/images/b/bc/Galar_-_EB.png' },
  ];

  const renderPokemonCard = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{`#${item.id} ${item.name}`}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={regionsData}
        keyExtractor={(item) => item.id}
        renderItem={renderPokemonCard}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 16,
  },
  card: {
    flex: 1,
    margin: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  cardImage: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
    marginBottom: 8,
    borderRadius: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default RegionsScreen;