import React, { useState } from 'react';
import { TodoList } from './TodoList';

const initialTodo: Todo[] = [
  {
    text: 'something',
    complete: true,
  },
  {
    text: 'does this work?',
    complete: false,
  },
]

function App() {

  const [todos, setTodos] = useState(initialTodo);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  }

  return <TodoList todos={todos} toggleTodo={toggleTodo} />;
}

export default App;
