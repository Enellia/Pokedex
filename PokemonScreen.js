import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const PokemonScreen = () => {
  const pokemonData = [
    { id: '001', name: 'Bulbizarre', image: 'https://www.pokepedia.fr/images/thumb/e/ef/Bulbizarre-RFVF.png/250px-Bulbizarre-RFVF.png' },
    { id: '002', name: 'Herbizarre', image: 'https://www.waouo.com/wp-content/uploads/2015/10/herbizarre.png' },
    { id: '003', name: 'Florizarre', image: 'https://www.pokepedia.fr/images/thumb/1/13/M%C3%A9ga-Florizarre-XY.png/1200px-M%C3%A9ga-Florizarre-XY.png' },
    { id: '004', name: 'Salamèche', image: 'https://www.pokepedia.fr/images/thumb/8/89/Salam%C3%A8che-RFVF.png/800px-Salam%C3%A8che-RFVF.png' },
    { id: '005', name: 'Reptincel', image: 'https://www.pokepedia.fr/images/thumb/6/64/Reptincel-RFVF.png/250px-Reptincel-RFVF.png' },
    { id: '006', name: 'Dracaufeu', image: 'https://www.pokepedia.fr/images/thumb/1/17/Dracaufeu-RFVF.png/800px-Dracaufeu-RFVF.png' },
    { id: '007', name: 'Carapuce', image: 'https://www.pokepedia.fr/images/thumb/c/cc/Carapuce-RFVF.png/800px-Carapuce-RFVF.png' },
    { id: '008', name: 'Carabaffe', image: 'https://www.pokepedia.fr/images/thumb/2/2a/Carabaffe-RFVF.png/800px-Carabaffe-RFVF.png' },
    { id: '009', name: 'Tortank', image: 'https://www.pokepedia.fr/images/thumb/2/24/Tortank-RFVF.png/800px-Tortank-RFVF.png' },
    { id: '010', name: 'Chenipan', image: 'https://www.pokepedia.fr/images/thumb/c/c7/Chenipan-RFVF.png/640px-Chenipan-RFVF.png' },
    { id: '011', name: 'Chrysacier', image: 'https://www.pokepedia.fr/images/thumb/6/6c/Chrysacier-RFVF.png/640px-Chrysacier-RFVF.png' },
    { id: '012', name: 'Papilusion', image: 'https://www.pokepedia.fr/images/thumb/8/83/Papilusion-RFVF.png/1200px-Papilusion-RFVF.png' },
    { id: '013', name: 'Aspicot', image: 'https://www.pokepedia.fr/images/9/9b/Aspicot-RFVF.png' },
    { id: '014', name: 'Coconfort', image: 'https://www.pokepedia.fr/images/b/b6/Coconfort-RFVF.png' },
    { id: '015', name: 'Dardargnan', image: 'https://www.pokepedia.fr/images/thumb/e/ee/Dardargnan-RFVF.png/800px-Dardargnan-RFVF.png' },
    { id: '016', name: 'Roucool', image: 'https://www.pokepedia.fr/images/thumb/9/94/Roucool-RFVF.png/250px-Roucool-RFVF.png' },
    { id: '017', name: 'Roucoups', image: 'https://www.pokepedia.fr/images/thumb/d/dc/Roucoups-RFVF.png/1200px-Roucoups-RFVF.png' },
    { id: '018', name: 'Roucarnage', image: 'https://www.pokepedia.fr/images/thumb/d/d8/Roucarnage-RFVF.png/1200px-Roucarnage-RFVF.png' },
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
        data={pokemonData}
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

export default PokemonScreen;