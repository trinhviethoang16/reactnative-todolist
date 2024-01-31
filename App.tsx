import React, {useState} from 'react';
import {
  FlatList,
  Keyboard,
  StyleSheet,
  Alert,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import {AddTodo} from './components/AddTodo';
import {Header} from './components/Header';
import {TodoItem} from './components/TodoItem';

export default function App() {
  const [todos, setTodos] = useState<{text: string; key: string}[]>([]);

  const addTodo = (text: string) => {
    if (text.length > 0) {
      setTodos(prevTodos => [
        {text, key: Math.random().toString()},
        ...prevTodos,
      ]);
    } else {
      Alert.alert('OOPS!', 'Todos cannot be empty', [
        {text: 'Understood', onPress: () => console.log('Alert closed')},
      ]);
    }
  };

  const pressHandler = (key: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key !== key);
    });
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.body}>
          <AddTodo addTodo={addTodo} />
          <FlatList
            data={todos}
            renderItem={({item}) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  body: {
    paddingHorizontal: 20,
  },
});
