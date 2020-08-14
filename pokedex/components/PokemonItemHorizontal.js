import React from 'react';
import {Text, View, Image} from 'react-native';

//EXTERNAL
import PropTypes from 'prop-types';

//INTERNAL
import globalStyles from './../styles/globalStyles';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {urlPokeresImages, fileTypePokeresImages} from './../utils/DataServices';
import {fistLetterToUperCase} from './../utils/General';

/**
 * Componente para mostrar un pokemon de manera horizontal
 * @author Cristobal Martinez <cristobalhijar@hotmail.com>
 * @version 1.0 - 13/08/2020
 * @param item - Objeto con la informacion del pokemon
 * @param index - Posicion del objeto en la lista
 * @param showGeneration - Booleano para mostrar la generacion
 */
const PokemonItemHorizontal = ({item, index, showGeneration}) => {
  console.log('index: ', index);

  return (
    <View style={globalStyles.containerPokemonList}>
      <View style={globalStyles.containerPokemonDetailsList}>
        <Image
          resizeMode={'cover'}
          style={{
            width: widthPercentageToDP('15%'),
            height: widthPercentageToDP('15%'),
          }}
          source={{
            uri: `${urlPokeresImages}${index + 1}${fileTypePokeresImages}`,
          }}
        />
        <View>
          <Text style={globalStyles.pokemonNameList}>
            {fistLetterToUperCase(item.name)}
          </Text>
          {showGeneration && (
            <Text style={globalStyles.smallText}>1st generation</Text>
          )}
        </View>
      </View>
      <View style={globalStyles.pokemonNumber}>
        <Text style={globalStyles.secondaryColor}>{`#${(index + 1)
          .toString()
          .padStart(3, '0')}`}</Text>
      </View>
    </View>
  );
};

PokemonItemHorizontal.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  showGeneration: PropTypes.bool.isRequired,
};

export default PokemonItemHorizontal;
