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

/**
 * @description - Hoja de estilos global
 * @author Cristobal Martinez <cristobalhijar@hotmail.com>
 * @version 1.0 - 13/08/2020
 */
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
  containerPokemonCard: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    margin: wp('2%'),
    backgroundColor: 'white',
    borderRadius: 10,
    width: wp('29%'),
  },
  containerPokemonDetailsCard: {
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
  containerSpinner: {
    flex: 1,
    justifyContent: 'center',
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
  pokemonNameCard: {
    fontSize: 18,
    fontWeight: '600',
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
  marginSmall: {
    margin: 5,
  },
});

export default globalStyles;
