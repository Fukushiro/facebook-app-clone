import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    flex: 1,
  },
  //   image
  ImageContainer: {
    flex: 0.4,
    justifyContent: 'center',
  },
  Image: {marginTop: '25%'},
  // login
  LoginContainer: {flex: 0.5, width: '100%', alignItems: 'center'},
  RowContainer: {
    flexDirection: 'row',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  RowClickable: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginTop: '5%',
  },
  RowClickableText: {
    marginLeft: '5%',
    color: '#384CFF',
  },
  RowClickableSmallerIcon: {marginLeft: 5},
  RowGroupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  NameText: {
    fontWeight: 'bold',
    color: 'black',
    marginLeft: '5%',
    fontSize: 18,
  },
  TreeDotsContainer: {},
  //   button
  ButtonContainer: {
    flex: 0.1,
  },
});
