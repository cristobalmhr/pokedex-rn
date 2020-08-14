import React from 'react';
import {Text, View, FlatList} from 'react-native';

//EXTERNAL
import PropTypes from 'prop-types';
import ProgressCircle from 'react-native-progress-circle';

//INTERNAL

import globalStyles from '../styles/globalStyles';

import {fistLetterToUperCase} from '../utils/General';
import {ICONS_COLOR, BACKGROUND_COLOR, DISABLED_COLOR} from '../utils/Colors';

/**
 * Componente para mostrar las estadisticas de un pokemon
 * @author Cristobal Martinez <cristobalhijar@hotmail.com>
 * @version 1.0 - 13/08/2020
 * @param abilities - Lista de habilidades
 */
const StatsList = ({stats}) => {
  return (
    <FlatList
      ListFooterComponent={<View style={globalStyles.marginBottomSmall} />}
      data={stats}
      numColumns={2}
      horizontal={false}
      renderItem={({item, index}) => (
        <View
          style={[
            globalStyles.containerProgressBar,
            globalStyles.marginLeftMedium,
          ]}>
          <ProgressCircle
            percent={item.base_stat / 2}
            radius={60}
            borderWidth={10}
            color={ICONS_COLOR}
            shadowColor={DISABLED_COLOR}
            bgColor={BACKGROUND_COLOR}>
            <Text
              style={
                globalStyles.fontSizeProgressBar
              }>{`${item.base_stat}`}</Text>
          </ProgressCircle>
          <Text style={globalStyles.subtitles2}>
            {fistLetterToUperCase(item.stat.name)}
          </Text>
        </View>
      )}
      keyExtractor={(item) => item.stat.name}
    />
  );
};

StatsList.propTypes = {
  stats: PropTypes.array.isRequired,
};

export default StatsList;
