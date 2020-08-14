import React from 'react';
import {Text, View, FlatList} from 'react-native';

//EXTERNAL
import {widthPercentageToDP} from 'react-native-responsive-screen';
import PropTypes from 'prop-types';

//INTERNAL
import globalStyles from '../styles/globalStyles';
import {fistLetterToUperCase} from '../utils/General';

/**
 * Componente para mostrar la lista de habilidades del pokemon
 * @author Cristobal Martinez <cristobalhijar@hotmail.com>
 * @version 1.0 - 13/08/2020
 * @param abilities - Lista de habilidades
 */
const AbilitiesList = ({abilities}) => {
  return (
    <FlatList
      ListFooterComponent={<View style={globalStyles.marginBottomSmall} />}
      data={abilities}
      numColumns={2}
      horizontal={false}
      renderItem={({item}) => (
        <View
          style={[
            {width: widthPercentageToDP('40%')},
            globalStyles.marginLeftMedium,
          ]}>
          <Text style={globalStyles.subtitles2}>
            {fistLetterToUperCase(item.ability.name)}
          </Text>
        </View>
      )}
      keyExtractor={(item) => item.slot}
    />
  );
};

AbilitiesList.propTypes = {
  abilities: PropTypes.array.isRequired,
};

export default AbilitiesList;
