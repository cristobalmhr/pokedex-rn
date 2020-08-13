import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';

//EXTERNAL
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

//INTERNAL
import globalStyles from './../styles/globalStyles';
import {ICONS_COLOR} from '../utils/Colors';
import {getPokemonList} from './../services/PokeApiService';
import PokemonRowsList from '../components/PokemonRowsList';
import PokemonCardsList from '../components/PokemonCardsList';
import {DETAILS_SCREEN} from './../utils/Screens';
import ActivityIndicator from './../components/ActivityIndicator';
/**
 * Pantalla de dashboard principal para mostrar lista de pokemon
 * @author Cristobal Martinez <cristobalhijar@hotmail.com>
 * @version 1.0 - 13/08/2020
 * @param navigation - Navegacion de React Navigation
 */
const DashboardScreen = ({navigation}) => {
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

  const showPokemonDetails = (index) => {
    console.log('index', index);
    navigation.navigate(DETAILS_SCREEN, {
      idPokemon: index,
    });
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
      {loading ? (
        <ActivityIndicator />
      ) : listView ? (
        <PokemonRowsList
          pokemonList={pokemonList}
          showPokemonDetails={showPokemonDetails}
        />
      ) : (
        <PokemonCardsList
          pokemonList={pokemonList}
          showPokemonDetails={showPokemonDetails}
        />
      )}
    </>
  );
};

DashboardScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default DashboardScreen;
