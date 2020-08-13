import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';

//EXTERNAL
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//INTERNAL
import globalStyles from './../styles/globalStyles';
import {ICONS_COLOR} from '../utils/Colors';

/**
 * Pantalla para mostrar la lista de pokemones
 * @author Cristobal Martinez <cristobalhijar@hotmail.com>
 * @version 1.0 - 12/08/2020
 * @param navigation - Prop de react navigation
 */
const DashboardScreen = ({navigation}) => {
  const [listView, setListView] = useState(true);
  const [loading, setLoading] = useState(true);

  const changeListView = () => {
    setListView(!listView);
  };

  return (
    <>
      <View style={globalStyles.containerOne}>
        <View style={globalStyles.containerHeader}>
          <View style={globalStyles.containerTitle}>
            <Image
              resizeMode={'contain'}
              source={require('./../resources/images/pokebola.png')}
              style={globalStyles.iconPokeball}
            />
            <Text style={globalStyles.titles}>Pokédex</Text>
          </View>
          <TouchableOpacity
            style={globalStyles.icons}
            onPress={() => changeListView()}>
            <MaterialCommunityIcons
              name={listView ? 'view-grid-outline' : 'format-list-bulleted'}
              size={30}
              backgroundColor="transparent"
              color={ICONS_COLOR}
              underlayColor="transparent"
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default DashboardScreen;
