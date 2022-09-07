import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

export function Button() {
  return (
    <TouchableOpacity style={styles.Container}>
      <Text style={[styles.Text]}>dasd</Text>
    </TouchableOpacity>
  );
}
