/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import {useState} from 'react';


function App() {
 const [tasks, setTasks] = useState(
  [
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <View>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
    </View>
  );
}

export default App;