import React, {useState, useRef, useEffect} from 'react';
import {SafeAreaView, Text, View, Keyboard, Image} from 'react-native';

//EXTERNAL
import PropTypes from 'prop-types';
import {Searchbar} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';

//INTERNAL
import {getPokemonSpeciesDetails} from './../services/PokeApiService';
import globalStyles from '../styles/globalStyles';
import {ICONS_COLOR, PRIMARY_COLOR, BACKGROUND_COLOR} from '../utils/Colors';
import ActivityIndicator from '../components/ActivityIndicator';
import PokemonRowsList from './../components/PokemonRowsList';
import {DETAILS_SCREEN} from '../utils/Screens';
import PokemonSearchList from '../components/PokemonSearchList';
/**
 * Pantalla de busqueda de pokemon
 * @author Cristobal Martinez <cristobalhijar@hotmail.com>
 * @version 1.0 - 13/08/2020
 * @param navigation - Navegacion de React Navigation
 */
const SearchScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);

  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  const searchBarRef = useRef(null);

  useEffect(() => {
    setTimeout(async () => {
      focusInputText();
    }, 300);
  }, []);

  useEffect(() => {
    setLoading(true);
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery) {
        callGetPokemonSpeciesDetails(searchQuery);
      } else {
        setLoading(false);
        setPokemon([]);
      }
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  const focusInputText = () => {
    searchBarRef.current.focus();
  };

  const callGetPokemonSpeciesDetails = async (searchQueryRequest) => {
    try {
      const pokemonResponse = await getPokemonSpeciesDetails(
        searchQueryRequest.toLowerCase(),
      );
      console.log('pokemon recuperado: ', pokemonResponse);
      setPokemon([pokemonResponse]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setPokemon([]);
      console.log('error: ', error.message);
    }
  };

  const showPokemonDetails = (index, name) => {
    console.log('index', index);
    navigation.navigate(DETAILS_SCREEN, {
      idPokemon: index,
      name: name,
    });
  };

  return (
    <View style={globalStyles.container}>
      <Searchbar
        inputStyle={{color: PRIMARY_COLOR}}
        style={{backgroundColor: BACKGROUND_COLOR}}
        ref={searchBarRef}
        iconColor={ICONS_COLOR}
        placeholderTextColor={PRIMARY_COLOR}
        placeholder={'Search'}
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      {loading ? (
        <View style={globalStyles.marginTopIndicator}>
          <ActivityIndicator />
        </View>
      ) : pokemon.length === 0 && !searchQuery ? (
        <Animatable.View
          animation="fadeIn"
          style={[globalStyles.containerBusqueda]}>
          <Image
            resizeMode={'cover'}
            style={globalStyles.searchImage}
            source={require('../resources/images/buscar.png')}
          />
          <Text style={globalStyles.searchText}>
            Find your favorite pokemon
          </Text>
        </Animatable.View>
      ) : pokemon.length === 0 && searchQuery ? (
        <Animatable.View
          animation="fadeIn"
          style={[globalStyles.containerBusqueda]}>
          <Image
            resizeMode={'cover'}
            style={globalStyles.searchImage}
            source={require('../resources/images/cajavacia.png')}
          />
          <Text style={globalStyles.searchText}>
            There are no Pokemon that match your search
          </Text>
        </Animatable.View>
      ) : (
        <PokemonSearchList
          pokemonList={pokemon}
          showPokemonDetails={showPokemonDetails}
        />
      )}
    </View>
  );
};

SearchScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SearchScreen;
