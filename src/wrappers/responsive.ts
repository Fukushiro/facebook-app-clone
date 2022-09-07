import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export function wp(val: number) {
  return widthPercentageToDP(val);
}
export function hp(val: number) {
  return heightPercentageToDP(val);
}
