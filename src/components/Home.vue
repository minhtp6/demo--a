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
import sweetalert from "sweetalert";
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
    let vm = this;
    axios
      .get("https://60c2b23a917002001739d615.mockapi.io/todos")
      .then(function (reponse) {
        if (reponse.status == 200) {
          vm.todos = reponse.data;
        } else {
          sweetalert("Failed!", "Can Not Connect To Server!", "error");
        }
      });
  },
  // created(){
  //   axios
  //     .get("https://60c2b23a917002001739d615.mockapi.io/todos")
  //     .then((reponse) => (this.todos = reponse.data));
  // },
  methods: {
    createTodo() {
      this.$modal.show(CreateTodo, { todos: this.todos });
    },
  },
};
</script>