import React from 'react';
import {View, ActivityIndicator as ActivityIndicatorRn} from 'react-native';

//INTERNAL
import globalStyles from './../styles/globalStyles';
import {ICONS_COLOR} from '../utils/Colors';

/**
 * Componente para mostrar indicador de carga
 * @author Cristobal Martinez <cristobalhijar@hotmail.com>
 * @version 1.0 - 13/08/2020
 */
const ActivityIndicator = () => {
  return (
    <View style={globalStyles.containerSpinner}>
      <ActivityIndicatorRn size="large" color={ICONS_COLOR} />
    </View>
  );
};

export default ActivityIndicator;
