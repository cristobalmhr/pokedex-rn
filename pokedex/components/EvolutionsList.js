import React from 'react';
import {Text, View, Image, FlatList, TouchableOpacity} from 'react-native';

//EXTERNAL
import PropTypes from 'prop-types';
import {widthPercentageToDP} from 'react-native-responsive-screen';

//INTERNAL
import globalStyles from '../styles/globalStyles';
import {fistLetterToUperCase} from '../utils/General';
import {DETAILS_SCREEN} from '../utils/Screens';

/**
 * Pantalla para mostrar el detalle del pokemon
 * @author Cristobal Martinez <cristobalhijar@hotmail.com>
 * @version 1.0 - 13/08/2020
 * @param evolutions - Lista de evoluciones del pokemon
 * @param navigation - Navegacion de React Navigation
 * @param idPokemon - Identificador del pokemon que se encuentra seleccionado
 */
const EvolutionsList = ({evolutions, navigation, idPokemon}) => {
  return (
    <FlatList
      ListFooterComponent={<View style={globalStyles.marginBottomSmall} />}
      data={evolutions}
      numColumns={3}
      horizontal={false}
      renderItem={({item, index}) => (
        <TouchableOpacity
          onPress={() => {
            navigation.push(DETAILS_SCREEN, {
              idPokemon: item.id,
              name: item.name,
            });
          }}
          style={[
            globalStyles.containerEvolution,
            globalStyles.marginLeftMedium,
            item.id === idPokemon && globalStyles.selectedContainerEvolution,
          ]}>
          <Image
            resizeMode={'cover'}
            style={{
              width: widthPercentageToDP('20%'),
              height: widthPercentageToDP('20%'),
            }}
            source={{
              uri: item.url,
            }}
          />
          <Text numberOfLines={1} style={globalStyles.subtitles3}>
            {fistLetterToUperCase(item.name)}
          </Text>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

EvolutionsList.propTypes = {
  evolutions: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
  idPokemon: PropTypes.number.isRequired,
};

export default EvolutionsList;
