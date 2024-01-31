import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface TodoItemProps {
  item: {text: string; key: string};
  pressHandler: (key: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({item, pressHandler}) => (
  <TouchableOpacity onPress={() => pressHandler(item.key)}>
    <Text style={styles.item}>{item.text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 10,
  },
});
