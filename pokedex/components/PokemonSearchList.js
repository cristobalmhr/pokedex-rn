import React from 'react';
import {View, TouchableOpacity, FlatList} from 'react-native';

//EXTERNAL
import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';

//INTERNAL
import globalStyles from './../styles/globalStyles';
import PokemonItemHorizontal from '../components/PokemonItemHorizontal';

/**
 * Componente para iterar una lista de pokemon para la busqueda de autocomplete
 * @author Cristobal Martinez <cristobalhijar@hotmail.com>
 * @version 1.0 - 13/08/2020
 * @param pokemonList - Lista de pokemon a iterar
 * @param showPokemonDetails - Funcion para mostrar el detalle del pokemon
 */
const PokemonSearchList = ({pokemonList, showPokemonDetails}) => {
  return (
    <Animatable.View animation="fadeInUp">
      <FlatList
        ListFooterComponent={<View style={globalStyles.marginBottomLarge} />}
        data={pokemonList}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() =>
              showPokemonDetails(
                item.pokedex_numbers[0].entry_number,
                item.name,
              )
            }>
            <PokemonItemHorizontal
              item={item}
              index={item.pokedex_numbers[0].entry_number - 1}
              showGeneration ={false}
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
      />
    </Animatable.View>
  );
};

PokemonSearchList.propTypes = {
  pokemonList: PropTypes.array.isRequired,
  showPokemonDetails: PropTypes.func.isRequired,
};

export default PokemonSearchList;
