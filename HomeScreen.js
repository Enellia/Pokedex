import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import PokemonScreen from './PokemonScreen';

const { width } = Dimensions.get('window');

const Tab = createBottomTabNavigator();

const HomeScreen = () => (
  <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://japan-glossy.fr/wp-content/uploads/2023/04/Banniere_Pokemon_ReMix-1.jpg' }}
        style={{ width: width, height: width * 0.5, resizeMode: 'cover', marginBottom: 20 }}
      />
      <Text style={styles.title}>Bienvenue sur le Pokedex</Text>
      <Text style={styles.text}>
        Explorez le monde Pokemon et découvrez toutes les aventures passionnantes qui vous attendent !
      </Text>

      {/* Types de Pokémon */}
      <View style={styles.typeContainer}>
        {/* Type Eau */}
        <Image
          source={{ uri: 'https://www.cartepokemonrare.com/wp-content/uploads/2022/07/meilleur-starter-eau_1024x1024.webp' }}
          style={{ width: 400, height: 150, resizeMode: 'cover', marginBottom: 10 }}
        />
        <Text style={styles.typeTitle}>Eau</Text>
        <Text style={styles.typeDescription}>
          Les Pokémon de type Eau sont généralement associés à des environnements aquatiques. Ils ont des capacités
          liées à l'eau et sont souvent trouvés près des rivières, lacs ou océans.
        </Text>
      </View>

      {/* Types de Pokémon */}
      <View style={styles.typeContainer}>
        {/* Type Feu */}
        <Image
          source={{ uri: 'https://www.cartepokemonrare.com/wp-content/uploads/2022/07/meilleur-starter-feu.webp' }}
          style={{ width: 400, height: 150, resizeMode: 'cover', marginBottom: 10 }}
        />
        <Text style={styles.typeTitle1}>Feu</Text>
        <Text style={styles.typeDescription}>
          Les Pokémon de type Feu sont associés à des environnements enflammés, souvent présents dans des zones volcaniques.
          Leurs attaques brûlantes les distinguent, contrastant avec les Pokémon de type Eau qui préfèrent les milieux aquatiques.
        </Text>
      </View>

      {/* Types de Pokémon */}
      <View style={styles.typeContainer}>
        {/* Type plante */}
        <Image
          source={{ uri: 'https://www.cartepokemonrare.com/wp-content/uploads/2022/07/meilleur-starter-plante.webp' }}
          style={{ width: 400, height: 150, resizeMode: 'cover', marginBottom: 10 }}
        />
        <Text style={styles.typeTitle2}>Plante</Text>
        <Text style={styles.typeDescription}>
        Les Pokémon de type Plante sont habituellement liés à des environnements verdoyants, comme les forêts ou les prairies. 
        Leurs capacités sont souvent en relation avec la nature, et on les trouve fréquemment entourés de plantes luxuriantes.
        </Text>
      </View>

       {/* Types de Pokémon */}
       <View style={styles.typeContainer}>
        {/* Type plante */}
        <Image
          source={{ uri: 'https://twinfinite.net/wp-content/uploads/2024/01/cutest-normal-type-pokemon.jpg?fit=1200%2C675' }}
          style={{ width: 400, height: 150, resizeMode: 'cover', marginBottom: 10 }}
        />
        <Text style={styles.typeTitle3}>Normal</Text>
        <Text style={styles.typeDescription}>
       Les Pokémon de type Normal sont souvent associés à des habitats variés et se trouvent fréquemment dans des environnements divers.
       Leur gamme d'attaques est généralement polyvalente, reflétant leur adaptabilité à différentes situations.
        </Text>
      </View>

    {/* Types de Pokémon */}
    <View style={styles.typeContainer}>
        {/* Type electrik */}
        <Image
          source={{ uri: 'https://www.cartepokemonrare.com/wp-content/uploads/2022/07/meilleurs-pokemon-de-type-electrique-pour-la-competition.jpg' }}
          style={{ width: 400, height: 150, resizeMode: 'cover', marginBottom: 10 }}
        />
        <Text style={styles.typeTitle4}>Electrique</Text>
        <Text style={styles.typeDescription}>
      Les Pokémon de type Électrique sont souvent associés à des zones chargées d'énergie électrique.
      On les trouve couramment près de centrales électriques, dans des zones de foudre ou des environnements électrifiés. 
        </Text>
      </View>

{/* Types de Pokémon */}
<View style={styles.typeContainer}>
        {/* Type roche */}
        <Image
          source={{ uri: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2018/05/pokemon-roca.jpg?tf=3840x' }}
          style={{ width: 400, height: 150, resizeMode: 'cover', marginBottom: 10 }}
        />
        <Text style={styles.typeTitle5}>Roche</Text>
        <Text style={styles.typeDescription}>
        Les Pokémon de type Roche sont fréquemment liés à des environnements montagneux ou rocailleux.
        On les trouve souvent dans des grottes, des cavernes ou au sommet de montagnes escarpées.
        </Text>
      </View>

      {/* Types de Pokémon */}
<View style={styles.typeContainer}>
        {/* Type insecte */}
        <Image
          source={{ uri: 'https://w.forfun.com/fetch/70/70ef7f9000d7f0cff964715577f96ac0.jpeg' }}
          style={{ width: 400, height: 150, resizeMode: 'cover', marginBottom: 10 }}
        />
        <Text style={styles.typeTitle6}>Insecte</Text>
        <Text style={styles.typeDescription}>
        
    Les Pokémon de type Insecte sont généralement associés à des environnements naturels tels que les forêts, les prairies et les jungles.
    Leur apparence et leurs attaques sont souvent inspirées par le monde des insectes, avec des capacités variées telles que piqûres et venins. 
        </Text>
      </View>

     {/* Types de Pokémon */}
     <View style={styles.typeContainer}>
        {/* Type Psy */}
        <Image
          source={{ uri: 'https://staticg.sportskeeda.com/editor/2021/01/ddfb2-16101253729316.png' }}
          style={{ width: 400, height: 150, resizeMode: 'cover', marginBottom: 10 }}
        />
        <Text style={styles.typeTitle7}>Psy</Text>
        <Text style={styles.typeDescription}>
        Les Pokémon de type Psy sont souvent associés à des capacités mentales et psychiques. 
        On les trouve généralement dans des habitats mystiques tels que des sanctuaires psychiques ou des lieux spirituels. 
        Leurs attaques, comme Choc Mental, reflètent leur capacité à manipuler l'esprit. 
        </Text>
      </View>

     {/* Types de Pokémon */}
     <View style={styles.typeContainer}>
        {/* Type vol */}
        <Image
          source={{ uri: 'https://www.cartepokemonrare.com/wp-content/uploads/2022/07/meilleurs-pokemon-de-type-vol-pour-la-competition.jpg' }}
          style={{ width: 400, height: 150, resizeMode: 'cover', marginBottom: 10 }}
        />
        <Text style={styles.typeTitle8}>Vol</Text>
        <Text style={styles.typeDescription}>
        Les Pokémon de type Vol sont souvent liés à des environnements aériens tels que les cieux, les montagnes ou les régions venteuses.
        Ils se distinguent par leur capacité à voler et à manœuvrer habilement dans les airs.  
        </Text>
      </View>

 {/* Types de Pokémon */}
 <View style={styles.typeContainer}>
        {/* Type acier */}
        <Image
          source={{ uri: 'https://www.cartepokemonrare.com/wp-content/uploads/2022/06/meilleur-pokemon-type-acier.jpg' }}
          style={{ width: 400, height: 150, resizeMode: 'cover', marginBottom: 10 }}
        />
        <Text style={styles.typeTitle}>Acier</Text>
        <Text style={styles.typeDescription}>
        Les Pokémon de type Acier sont souvent associés à des environnements industriels ou métalliques, et on les trouve fréquemment près de mines ou d'usines. 
        Leur corps est souvent constitué de matériaux métalliques, les rendant résistants et robustes. 
        </Text>
      </View>

 {/* Types de Pokémon */}
 <View style={styles.typeContainer}>
        {/* Type dragon */}
        <Image
          source={{ uri: 'https://cdn.shopify.com/s/files/1/0269/0868/8432/files/Pokemon-de-type-dragon_6374ad6e-9318-4cd8-ab78-c6ad277b05af.jpg?v=1586259352' }}
          style={{ width: 400, height: 150, resizeMode: 'cover', marginBottom: 10 }}
        />
        <Text style={styles.typeTitle9}>Dragon</Text>
        <Text style={styles.typeDescription}>
        Les Pokémon de type Dragon sont souvent liés à des habitats majestueux et éloignés, comme des montagnes escarpées ou des cavernes isolées. 
        Leur apparence imposante et leurs attaques puissantes, telles que Draco Météore, reflètent leur statut emblématique dans l'univers Pokémon. 
        </Text>
      </View>

{/* Types de Pokémon */}
<View style={styles.typeContainer}>
        {/* Type tenebre */}
        <Image
          source={{ uri: 'https://pm1.aminoapps.com/6335/ce108ce5cfefe607f5fcf62361d80f1404fd3470_hq.jpg' }}
          style={{ width: 400, height: 150, resizeMode: 'cover', marginBottom: 10 }}
        />
        <Text style={styles.typeTitle10}>Tenebre</Text>
        <Text style={styles.typeDescription}>
        Les Pokémon de type Ténèbres sont souvent associés à des environnements sombres et mystérieux, tels que des forêts obscures, des grottes profondes ou des lieux éloignés. 
        Leur nature ténébreuse se reflète dans leurs attaques sournoises, comme Morsure.
        </Text>
      </View>

{/* Types de Pokémon */}
<View style={styles.typeContainer}>
        {/* Type fée */}
        <Image
          source={{ uri: 'https://static.vecteezy.com/ti/vecteur-libre/p3/117844-modele-de-pokemon-de-type-fee-gratuit-vectoriel.jpg' }}
          style={{ width: 400, height: 150, resizeMode: 'cover', marginBottom: 10 }}
        />
        <Text style={styles.typeTitle11}>Fée</Text>
        <Text style={styles.typeDescription}>
        Les Pokémon de type Fée évoluent dans des environnements empreints de magie et de féerie. 
        On les trouve parmi des prairies enchantées, des forêts mystiques ou des lieux où la nature est imprégnée de pouvoir magique. 
        </Text>
      </View>
      


    </View>



  </ScrollView>
);



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
  typeTitle1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 5,
  },
  typeTitle2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 5,
  },
  typeTitle3: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'grey',
    marginBottom: 5,
  },
  typeTitle4: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'yellow',
    marginBottom: 5,
  },
  typeTitle5: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'brown',
    marginBottom: 5,
  },
  typeTitle6: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'darkgreen',
    marginBottom: 5,
  },
  typeTitle7: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'darkviolet',
    marginBottom: 5,
  },
  typeTitle8: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'lightblue',
    marginBottom: 5,
  },
  typeTitle9: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'darkblue',
    marginBottom: 5,
  },
  typeTitle10: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  typeTitle11: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'pink',
    marginBottom: 5,
  },
  typeDescription: {
    fontSize: 14,
    color: '#333333',
    marginHorizontal: 20,
  },
});

export default HomeScreen;
