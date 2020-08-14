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
 * Componente para mostrar un pokemon en forma de card
 * @author Cristobal Martinez <cristobalhijar@hotmail.com>
 * @version 1.0 - 13/08/2020
 * @param item - Objeto con la informacion del pokemon
 * @param index - Posicion del objeto en la lista
 */
const PokemonItemCard = ({item, index}) => {
  return (
    <View style={globalStyles.containerPokemonCard}>
      <View style={globalStyles.containerPokemonDetailsCard}>
        <Image
          resizeMode={'cover'}
          style={{
            width: widthPercentageToDP('20%'),
            height: widthPercentageToDP('20%'),
          }}
          source={{
            uri: `${urlPokeresImages}${index + 1}${fileTypePokeresImages}`,
          }}
        />
        <Text numberOfLines={1} style={globalStyles.pokemonNameCard}>
          {fistLetterToUperCase(item.name)}
        </Text>
      </View>
      <View style={[globalStyles.pokemonNumber, globalStyles.marginSmall]}>
        <Text style={globalStyles.secondaryColor}>{`#${(index + 1)
          .toString()
          .padStart(3, '0')}`}</Text>
      </View>
    </View>
  );
};

PokemonItemCard.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default PokemonItemCard;
