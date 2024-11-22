/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';



function App() {
 const [tasks, setTasks] = useState(
  [
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
    setTaskText('');
  };

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
      <View>
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={addTask} />
      </View>
    </NavigationContainer>
  );
}

export default App;