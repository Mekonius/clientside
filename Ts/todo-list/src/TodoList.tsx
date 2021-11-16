import React from "react";
import { ToDoListItem } from "./ToDoListItem";

interface Props{
    todos: Todo[],
    toggleTodo: ToggleTodo;
}

export const Todolist: React.FC<Props> = ({todos, toggleTodo}) => {
    return (
        <ul>
            {todos.map(todo => (
                <ToDoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo}/>
            ))}
        </ul>
    )
}