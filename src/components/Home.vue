<template>
  <div id="app">
    <h1>Vue.js Todo App</h1>

    <div>
      <div class="column">
        <button v-on:click="createTodo()" style="color: green">
          <i>+</i>
        </button>
        <button class="logout" v-on:click="logout()" style="color: steelblue">Logout</button>
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
  methods: {
    createTodo() {
      this.$modal.show(CreateTodo, { todos: this.todos });
    },
    logout() {
      let vm = this;
      vm.$session.destroy();
      location.reload();
    },
  },
};
</script>
<style scoped lang='css'>
button {
  text-align: center;
  padding: 10px;
  width: 100px;
  border-radius: 10px;
  border: 0.5px dotted;
}
.logout{
  float: right ;
}
</style>