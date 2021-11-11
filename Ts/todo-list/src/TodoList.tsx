import React from 'react';
import { TodoListItem } from './TodoListItem';

interface Props {
    todos: Todo[];
    toggleTodo: toggleTodo;
}

export const Todolist: React.FC<Props> = ({todos, toggleTodo}) => {
    return (
        <ul>
            {todos.map(todo => (
                <TodoListItem key ={todo.text} todo={todo} toggleTodo={toggleTodo}/>
            ))}
        </ul>
    )
};