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
        <th>Title</th>
        <th>Project</th>
        <th>Status</th>
        <th></th>
        <th></th>
      </tr>
    </table>
    <todo
      v-for="todo in todos"
      :todo="todo"
      :key="todo"
      v-on:complete-todo="completeTodo(todo)"
      v-on:delete-todo="deleteTodo(todo)"
      v-on:show-dialog="showDialog(todo)"
    />
    <EditTodo :todo="todo" />
  </div>
</template>

<script type = "text/javascript" >
import sweetalert from "sweetalert";
import Todo from "./Todo.vue";
import EditTodo from "./EditTodo";
export default {
  props: ["todos"],
  components: {
    Todo,
    EditTodo,
  },
  data() {
    return {
      isEditing: false,
    };
  },
  methods: {
    deleteTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
      sweetalert("Deleted!", "Your To-Do has been deleted.", "success");
    },
    completeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos[todoIndex].done = true;
      sweetalert("Success!", "To-Do completed!", "success");
    },
    showDialog(todo) {
      console.log(todo);
      this.$modal.show(EditTodo,todo);
    },
  },
};
</script>

<style>
table {
  width: 500px;
}
th {
  width: 100px;
  height: 50px;
  border: 0.1px solid black;
  text-align: center;
  background-color: white;
}
</style>

