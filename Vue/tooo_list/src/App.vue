<template>
<div>
  <h1 class="text-3xl">Todo List</h1>
  <h1 class="h1">Todo2 List</h1>
  <div>
    <form @submit.prevent="addTodo()">
      <h1 class="flex text-lg">New Todo: </h1>
      <input 
      v-model="newTodo" 
      name="newTodo" 
      autocomplete="off" 
      placeholder="Tilføj todo ting..." 
      class="
        rounded 
        p-4 
        border-t 
        mr-0 
        border-1 
        text-gray-600 
        border-gray-200 
        bg-white"
        />
      <button class=" bg-blue-500
                      text-white
                      font-bold
                      p-4
                      pb-3
                      border-b-4
                      rounded
      ">
      + tilføj
      </button>
    </form>
  </div>
  <ul class="flex flex-col justify-center">
    <li class="mt-3 border-b-4 border-yellow-600 " v-for="(todo, index) in todos" :key="index">
      <span :class="{done: todo.done}" class="cursor-pointer" @click="doneTodo(todo) ">
        <input type="checkbox" v-model="todo.done" class="form-checkbox text-pink-500"/>
        {{todo.content}}</span>
        <button class="removeBtn"
                       @click="removeTodo(index)"
                       >
                       Remove
        </button>
    </li>
</ul>
<h4 v-if="todos.length === 0" class="mt-3 border-t-4 border-yellow-600 ">Tom liste...</h4>
</div>
</template>

<style>

.done {
  text-decoration: line-through;
  cursor: pointer;
}

</style>

<script>
import { ref } from 'vue'
export default {
  name: "App",
  setup() {
    const newTodo = ref("");
    const defaultData = [
      {
        done: false,
        content: "Tilføj noget"
      },
    ];

    const todosData = JSON.parse(localStorage.getItem("todos")) || defaultData;
    const todos = ref(todosData);


    function addTodo() {
      if(newTodo.value) {
        todos.value.push({
          done: false,
          content: newTodo.value,
        });
        newTodo.value = "";
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
      localStorage.setItem("todos", storage);
    }


    return {
      todos,
      newTodo,
      addTodo,
      doneTodo,
      removeTodo,
      saveData,
    };
  },
};
</script>