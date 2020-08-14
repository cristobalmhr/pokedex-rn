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
  containerPokemonTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  containerDetailsPokemon: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  containerPokemonDetailsCard: {
    alignItems: 'center',
  },
  containerPokemonDetails: {
    padding: 5,
    margin: wp('2%'),
    backgroundColor: BACKGROUND_COLOR,
    borderRadius: 20,
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
    marginBottom: 20,
  },
  containerProgressBar: {
    width: wp('40%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  containerEvolution: {
    width: wp('25%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: ICONS_COLOR,
    borderRadius: 35,
    paddingVertical: 10,
  },
  selectedContainerEvolution: {
    backgroundColor: BACKGROUND_LIGHT_COLOR,
    borderWidth: 1,
  },
  titles: {
    fontSize: 28,
    color: PRIMARY_COLOR,
    marginHorizontal: 10,
    marginVertical: 5,
    fontWeight: 'bold',
  },
  subtitles: {
    fontSize: 22,
    color: ICONS_COLOR,
    marginHorizontal: 10,
    marginVertical: 5,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  subtitles2: {
    fontSize: 18,
    color: PRIMARY_COLOR,
    marginHorizontal: 10,
    marginVertical: 5,
    fontWeight: '600',
  },
  subtitles3: {
    fontSize: 15,
    fontWeight: '600',
    color: PRIMARY_COLOR,
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
    padding: 4,
    borderRadius: 5,
    backgroundColor: BACKGROUND_LIGHT_COLOR,
    fontSize: 20,
    color: ICONS_COLOR,
  },
  pokemonNumberHeader: {
    marginRight: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: BACKGROUND_COLOR,
  },
  descriptionPokemon: {
    maxWidth: wp('55%'),
    padding: 10,
    marginLeft: 10,
  },
  icons: {
    padding: 10,
  },
  iconPokeball: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
  marginBottomSmall: {
    marginBottom: 20,
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
  marginLeftMedium: {
    marginLeft: 20,
  },
  widthFakeItemHeader: {
    width: 50,
  },
  fontSizeProgressBar: {
    fontSize: 18,
  },
});

export default globalStyles;
