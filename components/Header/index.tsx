import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Header: React.FC = () => (
  <View style={styles.header}>
    <Text style={styles.title}>TodoApp</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: 'purple',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 27,
    fontWeight: 'bold',
  },
});
