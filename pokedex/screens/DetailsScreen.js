import React from 'react';
import {Text} from 'react-native';

//EXTERNAL

//INTERNAL
import PropTypes from 'prop-types';

/**
 * Pantalla para mostrar el detalle del pokemon
 * @author Cristobal Martinez <cristobalhijar@hotmail.com>
 * @version 1.0 - 13/08/2020
 * @param navigation - Navegacion de React Navigation
 */
const DetailsScreen = ({navigation, route}) => {
  const {idPokemon} = route.params;

  return <Text>Details Search {idPokemon}</Text>;
};

DetailsScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default DetailsScreen;
