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
  titles: {
    fontSize: 28,
    color: PRIMARY_COLOR,
    marginHorizontal: 10,
    marginVertical: 5,
    fontWeight: 'bold',
  },
  icons: {
    padding: 10,
  },
  iconPokeball: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
});

export default globalStyles;
