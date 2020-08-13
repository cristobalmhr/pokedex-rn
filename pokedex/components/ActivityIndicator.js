import React from 'react';
import {View, ActivityIndicator as ActivityIndicatorRn} from 'react-native';

//INTERNAL
import globalStyles from './../styles/globalStyles';
import {ICONS_COLOR} from '../utils/Colors';

const ActivityIndicator = () => {
  return (
    <View style={globalStyles.containerSpinner}>
      <ActivityIndicatorRn size="large" color={ICONS_COLOR} />
    </View>
  );
};

export default ActivityIndicator;
