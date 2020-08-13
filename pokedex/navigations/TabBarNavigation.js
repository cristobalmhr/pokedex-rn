import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {DASHBOARD_SCREEN, SEARCH_SCREEN} from './../utils/Screens';
import {DISABLED_COLOR, PRIMARY_COLOR} from './../utils/Colors';
import DashboardScreen from '../screens/DashboardScreen';
import SearchScreen from '../screens/SearchScreen';

const Tab = createMaterialBottomTabNavigator();

const TabBarNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={DashboardScreen}
      activeColor={PRIMARY_COLOR}
      inactiveColor={DISABLED_COLOR}
      barStyle={{backgroundColor: 'white'}}>
      <Tab.Screen
        name={DASHBOARD_SCREEN}
        component={DashboardScreen}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={SEARCH_SCREEN}
        component={SearchScreen}
        options={{
          tabBarLabel: 'Buscar',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="magnify" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabBarNavigation;
