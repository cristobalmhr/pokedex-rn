import {StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {
  BACKGROUND_COLOR,
  PRIMARY_COLOR,
  DISABLED_COLOR,
  SECONDARY_COLOR,
  ICONS_COLOR,
  BACKGROUND_LIGHT_COLOR,
} from './../utils/Colors';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerPokemonList: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    margin: 7,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  containerPokemonDetailsList: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titles: {
    fontSize: 28,
    color: PRIMARY_COLOR,
    marginHorizontal: 10,
    marginVertical: 5,
    fontWeight: 'bold',
  },
  titleName: {
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 10,
  },
  smallText: {
    fontSize: 15,
    fontWeight: '600',
    marginLeft: 10,
    color: 'gray',
  },
  pokemonNameList: {
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 10,
  },
  pokemonNumber: {
    marginRight: 10,
    padding: 4,
    borderRadius: 5,
    backgroundColor: BACKGROUND_LIGHT_COLOR,
  },
  icons: {
    padding: 10,
  },
  iconPokeball: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
  marginBottomLarge: {
    marginBottom: 80,
  },
  secondaryColor: {
    color: SECONDARY_COLOR,
  },
});

export default globalStyles;
