import React, { useState } from 'react';
import { Todolist } from './TodoList';
import { TodoListItem } from './TodoListItem';
import {AddTodoForm} from './AddTodoForm'

const initialTodos: Todo[] = [
  {
  text: 'something',
  complete: true,
}, 
{
  text: 'does this work',
  complete: false,
}
]

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggledTodo: toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if(todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  }

const addTodo: AddTodo = (text:string) => {
  const newTodo = {text, complete: false};
  setTodos([...todos,newTodo]);
}

  return <>
  <Todolist todos={todos} toggleTodo={toggledTodo} />
  <AddTodoForm addTodo={addTodo}/>
  </>
}

export default App;
