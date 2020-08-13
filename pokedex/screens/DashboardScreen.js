import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, Image, FlatList} from 'react-native';

//EXTERNAL
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';

//INTERNAL
import globalStyles from './../styles/globalStyles';
import {ICONS_COLOR} from '../utils/Colors';
import {getPokemonList} from './../services/PokeApiService';
import PokemonItemHorizontal from '../components/PokemonItemHorizontal';

const DashboardScreen = () => {
  const [listView, setListView] = useState(true);
  const [loading, setLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    callGetPokemonList();
  }, []);

  const callGetPokemonList = async () => {
    try {
      const pokemonsList = await getPokemonList(150, 0);
      setPokemonList(pokemonsList.results);
      setLoading(false);
      console.log('pokemonsList: ', pokemonsList.results);
    } catch (error) {
      setLoading(false);
      console.log('error: ', error.message);
    }
  };

  const changeListView = () => {
    setListView(!listView);
  };

  const showPokemonDetails = (item, index) => {
      console.log("item", item);
      console.log("index", index)

  };

  return (
    <>
      <View style={globalStyles.containerHeader}>
        <View style={globalStyles.containerTitle}>
          <Image
            resizeMode={'contain'}
            source={require('./../resources/images/pokebola.png')}
            style={globalStyles.iconPokeball}
          />
          <Text style={globalStyles.titles}>Pokédex</Text>
        </View>
        <TouchableOpacity
          style={globalStyles.icons}
          onPress={() => changeListView()}>
          <MaterialCommunityIcons
            name={listView ? 'view-grid-outline' : 'format-list-bulleted'}
            size={30}
            backgroundColor="transparent"
            color={ICONS_COLOR}
            underlayColor="transparent"
          />
        </TouchableOpacity>
      </View>
      <Animatable.View animation="fadeInUp">
        <FlatList
          ListFooterComponent={<View style={globalStyles.marginBottomLarge} />}
          data={pokemonList}
          renderItem={({item, index}) => (
            <TouchableOpacity onPress={() => showPokemonDetails(item, index)}>
              <PokemonItemHorizontal item={item} index={index} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
        />
      </Animatable.View>
    </>
  );
};

export default DashboardScreen;
