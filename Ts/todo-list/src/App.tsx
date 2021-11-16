import React, { useState } from 'react';
import { AddTodoForm } from './AddTodoForm';
import { Todolist } from './TodoList';

const initialtodo: Todo[]=[
  {
    text: 'Learn frontend',
    complete: false
  },
  {
    text: 'Hang myself',
    complete: false
  }
]

function App() {
  const [todos, setTodos] = useState(initialtodo);

  const toggleTodo: ToggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if(todo === selectedTodo){
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  }

  const addTodo: AddTodo = (text: string) => {
      const newTodo = {text, complete: false};
      setTodos([...todos, newTodo]);
  }
  
  return( 
  <>
    <Todolist todos ={todos} toggleTodo={toggleTodo}/>
    <AddTodoForm addTodo={addTodo} />
  </>
  )}

export default App;
