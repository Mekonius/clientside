<template>
  <div>
    <h1>Todo List</h1>
    <div>
      <form  @submit.prevent="addTodo()">
        <h1>New Todo: </h1>
        <input v-model="newTodo" name="newTodo" autocomplete="off" placeholder="Add Todo...">
        <button>+ Add</button>
      </form>
    </div>

    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <span :class="{done: todo.done}" @click="doneTodo(todo)">
          {{ todo.content }}
        </span>
        <button @click="removeTodo(index)">Remove</button>
      </li>
    </ul>
    <h4 v-if="todos.length === 0">Empty list...</h4>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'App',
  setup() {
    const newTodo = ref("");
    const defaultData = [
      { done: false, content: 'Tilføj noget' }
    ];
    const todosData = JSON.parse(localStorage.getItem('todos')) || defaultData;
    const todos = ref(todosData);

    function addTodo() {
      if(newTodo.value) {
        todos.value.push({
          done: false,
          content: newTodo.value
        });
        newTodo.value = '';
      }
      saveData();
    }

    function doneTodo(todo) {
      todo.done = !todo.done;
      saveData();
    }

    function removeTodo(index) {
      todos.value.splice(index, 1);
      saveData();
    }

    function saveData() {
      const storage = JSON.stringify(todos.value);
      localStorage.setItem('todos', storage);
    }

    return {
      todos,
      newTodo,
      addTodo,
      doneTodo,
      removeTodo,
      saveData
    };
  }
}
</script>

