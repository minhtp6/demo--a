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
      v-for="(todo,k) of todos"
      :todo="todo"
      :key="`${k}k`"
      v-on:complete-todo="completeTodo(todo)"
      v-on:delete-todo="deleteTodo(todo)"
      v-on:edit-todo="editTodo(todo)"
    />
    <!-- v-on:edit-todo="editTodo()" -->
    <!-- <div class="card" v-for="todo in todos" v-bind:key="todo">
      <div class="content" v-show="!isEditing">
        <div class="header">
          {{ todo.title }}
        </div>
        <div class="meta">
          {{ todo.project }}
        </div>
        <div class="extra content">
          <span class="right" v-on:click="showForm">
            <i class="edit icon">Edit </i>
          </span>
          <i>//</i>
          <span class="right" v-on:click="deleteTodo(todo)">
            <i class="trash icon">Delete</i>
          </span>
        </div>
      </div>
      <div class="content" v-show="isEditing">
        <div class="ui form">
          <div class="field">
            <label>Title</label>
            <input type="text" v-model="todo.title" />
          </div>
          <div class="field">
            <label>Project</label>
            <input type="text" v-model="todo.project" />
          </div>
          <div class="ui two button attached buttons">
            <button class="ui basic blue button" v-on:click="hideForm">
              Close X
            </button>
          </div>
        </div>
      </div>
      <div class="buttonPass" v-show="!isEditing && todo.done" disabled>
        Completed
      </div>
      <div
        class="buttonPending"
        v-on:click="completeTodo(todo)"
        v-show="!isEditing && !todo.done"
      >
        Pending
      </div>
    </div> -->
  </div>
</template>

<script type = "text/javascript" >
import sweetalert from "sweetalert";
import Todo from "./Todo.vue";
import EditTodoVue from "./EditTodo.vue";
export default {
  props: ["todos"],
  components: {
    Todo,
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
    editTodo(todo) {
        const todoIndex = this.todos.indexOf(todo);
        this.$modal.show(EditTodoVue, { todo: this.todos[todoIndex] });
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
  border: 5px solid black;
  text-align: center;
  background-color: lightsalmon;
}
</style>

