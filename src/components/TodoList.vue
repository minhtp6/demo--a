<template>
  <div>
    <p class="tasks">
      Completed Tasks:
      {{
        todos.filter((todo) => {
          return todo.done === true;
        }).length
      }}
    </p>
    <p class="tasks">
      Pending Tasks:
      {{
        todos.filter((todo) => {
          return todo.done === false;
        }).length
      }}
    </p>
    <table>
      <tr>
        <td scope="col" width="400px">TITLE</td>
        <td scope="col" width="400px">PROJECT</td>
        <td scope="col" width="100px">STATUS</td>
        <td></td>
        <td></td>
      </tr>
    </table>
    <table>
      <todo
        v-for="(todo, k) of todos"
        :todo="todo"
        :key="`${k}k`"
        v-on:complete-todo="completeTodo(todo)"
        v-on:delete-todo="deleteTodo(todo)"
        v-on:edit-todo="editTodo(todo)"
      />
    </table>
  </div>
</template>

<script type = "text/javascript" >
import sweetalert from "sweetalert";
import Todo from "./Todo.vue";
import EditTodoVue from "./EditTodo.vue";
import axios from "axios";
export default {
  props: ["todos"],
  components: {
    Todo,
  },
  data() {
    return {};
  },

  methods: {
    deleteTodo(todo) {
      let vm = this;
      vm.$loading(true);
      var todoIndex = todo.id;
      axios
        .delete(
          "https://60c2b23a917002001739d615.mockapi.io/todos/" + todoIndex
        )
        .then(function (response) {
          if (response.status == 200) {
            sweetalert("Deleted!", "Your To-Do has been deleted.", "success");
            vm.todos.splice(vm.todos.indexOf(todo), 1);
          } else {
            sweetalert("Failed!", "Can Not Connect To Server!", "error");
          }
        })
        .finally(() => {
          this.$loading(false);
        });
    },
    completeTodo(todo) {
      let vm = this;
      var todoIndex = todo.id;
      vm.$loading(true);
      todo.done = true;
      axios
        .put(
          "https://60c2b23a917002001739d615.mockapi.io/todos/" + todoIndex,
          todo
        )
        .then(function (response) {
          if (response.status == 200) {
            sweetalert("Success!", "To-Do completed!", "success");
          } else {
            sweetalert("Failed!", "Can Not Connect To Server!", "error");
          }
        })
        .finally(() => {
          this.$loading(false);
        });
    },
    editTodo(todo) {
      var todoIndex = this.todos.indexOf(todo);
      this.$modal.show(EditTodoVue, { todo: this.todos[todoIndex] });
    },
  },
};
</script>


