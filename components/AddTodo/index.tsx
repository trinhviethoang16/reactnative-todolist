import React, {useState} from 'react';
import {Button, TextInput, View, StyleSheet} from 'react-native';

interface AddTodoProps {
  addTodo: (text: string) => void;
}

export const AddTodo: React.FC<AddTodoProps> = ({addTodo}) => {
  const [text, setText] = useState('');

  const onChange = (value: string) => setText(value);

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Add a todo"
        onChangeText={onChange}
      />
      <Button onPress={() => addTodo(text)} title="Add Todo" color="purple" />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
