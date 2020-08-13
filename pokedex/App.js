import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';

//EXTERNAL
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as PaperProvider} from 'react-native-paper';

//INTERNAL
import TabBarNavigation from './navigations/TabBarNavigation';

const PrincipalNavigationStack = createStackNavigator();

const App = () => {
  return (
    <>
      <PaperProvider>
        <StatusBar barStyle="light-content" />
        <NavigationContainer>
          <TabBarNavigation />
        </NavigationContainer>
      </PaperProvider>
    </>
  );
};

export default App;
