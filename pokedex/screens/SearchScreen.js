import React from 'react';
import {Text} from 'react-native';

//EXTERNAL

//INTERNAL
import PropTypes from 'prop-types';

/**
 * Pantalla para buscar pokemon
 * @author Cristobal Martinez <cristobalhijar@hotmail.com>
 * @version 1.0 - 13/08/2020
 * @param navigation - Navegacion de React Navigation
 */
const SearchScreen = ({navigation, idPokemon}) => {
  return <Text>Search screen</Text>;
};

SearchScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SearchScreen;
