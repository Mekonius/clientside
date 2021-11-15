<template>
  <div>
    <h1 class="text-5xl text-center font-bold justify-center p-10">Todo List</h1>
    <div class="mb-2">
      <form @submit.prevent="addTodo()">
        <h1 class="flex text-lg pl-2">New Todo: </h1>
        <input class="rounded p-4 border-t border-1 text-gray-600 border-gray-200 bg-white" v-model="newTodo" name="newTodo" autocomplete="off" placeholder="Add Todo...">
        <button class="bg-blue-500 text-white font-bold p-4 px-5 pb-3 border-b-4 rounded">+ Add</button>
      </form>
    </div>

    <ul class="flex flex-col justify-center">
      <li class="mt-2 border-b-4 border-yellow-600" v-for="(todo, index) in todos" :key="index">
        <input type="checkbox" v-model="todo.done">
        <span style="line-height: 38px;" class="pl-2" :class="{done: todo.done}" @click="doneTodo(todo)">
          {{ todo.content }}
        </span>
        <button class="float-right bg-red-500 mb-2 hover:bg-gray-500 text-white font-bold p-1 pb-1 border-b-4 px-3 border-red-700 rounded" @click="removeTodo(index)">Remove</button>
      </li>
    </ul>
    <h4 v-if="todos.length === 0" class="mt-3 border-t-4 border-yellow-600">Empty list...</h4>
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

<style>
.done {
  text-decoration: line-through;
}

.px-3 {
    padding-left: 0.85rem !important;
    padding-right: 0.85rem !important;
}
</style>

