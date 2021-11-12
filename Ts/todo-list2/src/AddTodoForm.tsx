import React from 'react';

interface Props {
    addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = ({addTodo}) => {
    return (
        <form>
            <input type="text" />
            <button type="submit">Add Todo item</button>
        </form>
    )
}