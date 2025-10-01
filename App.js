
import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
// AsyncStorage was removed from react-native core. Use the community package instead.
// Install with: npm install @react-native-async-storage/async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getTasks, addTask } from './service/storage';



import ItemList from './components/itemList';
import ItemInput from './components/itemInput';


export default function App() {
  // tasks state lives in App and is passed down to the list
  const [tasks, setTasks] = useState([]);

  // load stored tasks on mount so the UI reflects persisted data
  useEffect(() => {
    const loadTasks = async () => {
      try {
        const existing = await getTasks();
        setTasks(existing);
      } catch (error) {
        console.error('loading error', error);
      }
    };
    loadTasks();
  }, []);

  // handler passed to ItemInput so it can add a new task
  const handleAddItem = async (text) => {
    try {
      const task = { id: Date.now().toString(), text };
      const next = await addTask(task);
      // update UI state as well
      setTasks(next);
    } catch (error) {
      console.error('saving error', error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Input component receives a callback to add items to the central state */}
      <ItemInput onAddItem={handleAddItem} />
      {/* List receives tasks via props and renders them */}
      <ItemList tasks={tasks} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
