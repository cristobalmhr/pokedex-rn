import React from 'react';

import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import DashboardScreen from '../screens/DashboardScreen';
import DetailsScreen from '../screens/DetailsScreen';
import {DASHBOARD_SCREEN, DETAILS_SCREEN} from './../utils/Screens';

const PrincipalStackNavigatorRn = createStackNavigator();

const PrincipalStackNavigator = ({navigation}) => (
  <PrincipalStackNavigatorRn.Navigator
    screenOptions={{
      headerShown: true,
      headerTransparent: true,
      ...TransitionPresets.SlideFromRightIOS,
    }}>
    <PrincipalStackNavigatorRn.Screen
      name={DASHBOARD_SCREEN}
      component={DashboardScreen}
      options={{
        headerShown: false,
      }}
    />
    <PrincipalStackNavigatorRn.Screen
      name={DETAILS_SCREEN}
      component={DetailsScreen}
      options={{
        headerShown: false,
      }}
    />
  </PrincipalStackNavigatorRn.Navigator>
);

export default PrincipalStackNavigator;
