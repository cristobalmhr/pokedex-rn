import React from 'react';
import {View, TouchableOpacity, FlatList} from 'react-native';

//EXTERNAL
import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';

//INTERNAL
import globalStyles from './../styles/globalStyles';
import PokemonItemCard from '../components/PokemonItemCard';

/**
 * Componente para iterar una lista de pokemon en forma de cards
 * @author Cristobal Martinez <cristobalhijar@hotmail.com>
 * @version 1.0 - 13/08/2020
 * @param pokemonList - Lista de pokemon a iterar
 * @param showPokemonDetails - Funcion para mostrar el detalle del pokemon
 */
const PokemonCardsList = ({pokemonList, showPokemonDetails}) => {
  return (
    <Animatable.View animation="fadeInUp">
      <FlatList
        ListFooterComponent={<View style={globalStyles.marginBottomLarge} />}
        data={pokemonList}
        numColumns={3}
        horizontal={false}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => showPokemonDetails(index + 1, item.name)}>
            <PokemonItemCard item={item} index={index} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
      />
    </Animatable.View>
  );
};

PokemonCardsList.propTypes = {
  pokemonList: PropTypes.array.isRequired,
  showPokemonDetails: PropTypes.func.isRequired,
};

export default PokemonCardsList;
