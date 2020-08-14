import React from 'react';
import {Text, View, Image} from 'react-native';

//EXTERNAL
import {widthPercentageToDP} from 'react-native-responsive-screen';
import PropTypes from 'prop-types';

//INTERNAL
import globalStyles from '../styles/globalStyles';
import {urlPokeresImages, fileTypePokeresImages} from './../utils/DataServices';
import {fistLetterToUperCase} from '../utils/General';
import ActivityIndicator from '../components/ActivityIndicator';

/**
 * Componente para mostrar la informacion principal del pokemon
 * @author Cristobal Martinez <cristobalhijar@hotmail.com>
 * @version 1.0 - 13/08/2020
 * @param idPokemon - Identificador del pokemon
 * @param name - Nombre del pokemon
 * @param loadingDescription - Booleano para indicar la carga
 * @param description - Descripcion del pokemon
 */
const PokemonDescription = ({
  idPokemon,
  name,
  loadingDescription,
  description,
}) => {
  return (
    <View
      style={[
        globalStyles.containerDetailsPokemon,
        globalStyles.containerPokemonDetails,
      ]}>
      <Image
        resizeMode={'cover'}
        style={{
          width: widthPercentageToDP('35%'),
          height: widthPercentageToDP('35%'),
        }}
        source={{
          uri: `${urlPokeresImages}${idPokemon}${fileTypePokeresImages}`,
        }}
      />
      <View>
        <Text style={[globalStyles.titles, globalStyles.marginLeftMedium]}>
          {fistLetterToUperCase(name)}
        </Text>
        {!loadingDescription ? (
          <Text style={globalStyles.descriptionPokemon}>{description}</Text>
        ) : (
          <ActivityIndicator />
        )}
      </View>
    </View>
  );
};

PokemonDescription.propTypes = {
  idPokemon: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  loadingDescription: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
};

export default PokemonDescription;
