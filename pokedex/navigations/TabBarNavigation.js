import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {PRINCIPAL_TAB, SEARCH_TAB} from './../utils/Screens';
import {DISABLED_COLOR, ICONS_COLOR, BACKGROUND_COLOR} from './../utils/Colors';
import SearchScreen from '../screens/SearchScreen';
import PrincipalStackNavigator from './PrincipalStackNavigation';
import SearchStackNavigator from './SearchStackNavigator';

const Tab = createMaterialBottomTabNavigator();

/**
 * Navegacion de tabbar
 * @author Cristobal Martinez <cristobalhijar@hotmail.com>
 * @version 1.0 - 12/08/2020
 */
const TabBarNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={PrincipalStackNavigator}
      activeColor={ICONS_COLOR}
      inactiveColor={DISABLED_COLOR}
      barStyle={{backgroundColor: BACKGROUND_COLOR}}>
      <Tab.Screen
        name={PRINCIPAL_TAB}
        component={PrincipalStackNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={SEARCH_TAB}
        component={SearchStackNavigator}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="magnify" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabBarNavigation;
