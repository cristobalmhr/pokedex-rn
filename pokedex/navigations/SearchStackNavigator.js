import React from 'react';

import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import DetailsScreen from '../screens/DetailsScreen';
import SearchScreen from '../screens/SearchScreen';
import {SEARCH_SCREEN, DETAILS_SCREEN} from './../utils/Screens';

const SearchStackNavigatorRn = createStackNavigator();

const SearchStackNavigator = ({navigation}) => (
  <SearchStackNavigatorRn.Navigator
    screenOptions={{
      ...TransitionPresets.SlideFromRightIOS,
    }}>
    <SearchStackNavigatorRn.Screen
      name={SEARCH_SCREEN}
      component={SearchScreen}
      options={{
        headerShown: false,
      }}
    />
    <SearchStackNavigatorRn.Screen
      name={DETAILS_SCREEN}
      component={DetailsScreen}
      options={{
        headerShown: false,
      }}
    />
  </SearchStackNavigatorRn.Navigator>
);

export default SearchStackNavigator;
