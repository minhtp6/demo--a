<template>
  <div id="app">
    <h1>Vue.js Todo App</h1>
    <div>
      <div class="column">
        <button v-on:click="createTodo()">
          <i>+</i>
        </button>
        <todo-list v-bind:todos="todos"></todo-list>
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from "./TodoList";
import CreateTodo from "./CreateTodo";
import axios from "axios";
export default {
  name: "app",
  components: {
    TodoList,
  },
  data() {
    return {
      todos: null,
    };
  },
  mounted() {
     axios
      .get("https://60c2b23a917002001739d615.mockapi.io/todos")
      .then((reponse) => (this.todos = reponse.data));

  },
  created(){
    axios
      .get("https://60c2b23a917002001739d615.mockapi.io/todos")
      .then((reponse) => (this.todos = reponse.data));
  },
  methods: {
    createTodo() {
      this.$modal.show(CreateTodo,{todos:this.todos});
    },
  },
};
</script>