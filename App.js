

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View ,TextInput ,Button , FlatList} from 'react-native';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ItemList from './components/itemList';
import ItemInput from './components/itemInput';

export default function App() {
  // tasks state lives in App and is passed down to the list
  const [tasks, setTasks] = useState([]);

  // handler passed to ItemInput so it can add a new task
  const handleAddItem = (text) => {
    if (!text || text.trim() === '') return;
    setTasks((cur) => [...cur, { id: Date.now().toString(), text: text.trim() }]);
  };

  return (
    <View style={styles.container}>
      {/* Input component receives a callback to add items to the central state */}
      <ItemInput onAddItem={handleAddItem} />
      {/* List receives tasks via props and renders them */}
      <ItemList tasks={tasks} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 55,
    paddingHorizontal:17
  },
  inputView: {
    // Use flexbox without unsupported properties like `gap`
    flexDirection: 'row', // Align children in a row
    justifyContent: 'space-between', // Space out children
    alignItems: 'center', // Align children vertically
    borderBottomWidth: 1,
    borderBottomColor: 'grey'
  },
  // inputText:{
  //   display:'flex',
  //   width: '80%'
  // },
});
