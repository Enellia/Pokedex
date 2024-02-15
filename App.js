import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import PokemonScreen from './PokemonScreen';
import HomeScreen from './HomeScreen';
import RegionsScreen from './RegionsScreen';
const { width } = Dimensions.get('window');

const Tab = createBottomTabNavigator();



const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
        }}
      >
      
        <Tab.Screen
          name="Settings1"
          component={HomeScreen}
          options={{
            title: 'Accueil',
            tabBarIcon: ({size,focused}) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={require('./assets/pikachu.png')}
                />
              );
            },
          }}
        />

        <Tab.Screen
          name="Settings2"
          component={PokemonScreen}
          options={{
            title: 'Les Pokemons',
            tabBarIcon: ({size,focused}) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={require('./assets/pokeball.png')}
                />
              );
            },
          }}
        />
        {/* <Tab.Screen name="Les Régions" component={RegionsScreen} /> */}
        <Tab.Screen
          name="Settings3"
          component={RegionsScreen}
          options={{
            title: 'Les Régions',
            tabBarIcon: ({size,focused}) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={require('./assets/Pokemon_Location_icon-icons.com_67519.png')}
                />
              );
            },
          }}
        />

        
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    marginHorizontal: 20,
    color: '#333333',
  },
  typeContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  typeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
    marginBottom: 5,
  },
  typeDescription: {
    textAlign: 'center',
    fontSize: 14,
    color: '#333333',
    marginHorizontal: 20,
  },
});

export default App;
