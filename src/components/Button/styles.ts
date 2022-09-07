import {StyleSheet} from 'react-native';
import {hp, wp} from '../../wrappers/responsive';

export const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#384CFF',
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(5.5),
    width: wp(70),
    borderRadius: 15,
  },
  Text: {color: 'white'},
});
