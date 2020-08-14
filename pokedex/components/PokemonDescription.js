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

export default PokemonDescription;
