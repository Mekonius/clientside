
interface Todo {
    text: string;
    complete: boolean;
}

type toggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (text: string) => void;