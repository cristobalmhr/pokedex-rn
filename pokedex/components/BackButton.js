import React from 'react';
import {TouchableOpacity} from 'react-native';

//EXTERNOS
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import {ICONS_COLOR} from '../utils/Colors';
import globalStyles from '../styles/globalStyles';

/**
 * Back button para navegacion
 * @author Cristobal Martinez <cristobalhijar@hotmail.com>
 * @version 1.0 - 13/08/2020
 * @param navigation - Navegacion de React Navigation
 */
const BackButton = ({navigation}) => {
  return (
    <TouchableOpacity
      style={globalStyles.icons}
      onPress={() => {
        navigation.goBack();
      }}>
      <MaterialCommunityIcons
        name="arrow-left"
        size={30}
        backgroundColor="transparent"
        color={ICONS_COLOR}
        underlayColor="transparent"
      />
    </TouchableOpacity>
  );
};

BackButton.propTypes = {
  navigation: PropTypes.any,
};

export default BackButton;
