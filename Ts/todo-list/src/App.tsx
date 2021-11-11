import React, { useState } from 'react';
import { Todolist } from './TodoList';
import { TodoListItem } from './TodoListItem';

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

  const toggledTodo = (selectedTodo: Todo) => {
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
  return <Todolist todos={todos} toggleTodo={toggledTodo} />
}

export default App;
