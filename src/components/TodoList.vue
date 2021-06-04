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
    <!-- <todo v-for="todo in todos" v-bind:key="todo"/>  -->
    <div class="card" v-for="todo in todos" v-bind:key="todo">
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
    </div>
  </div>
</template>

<script type = "text/javascript" >
import sweetalert from "sweetalert";
// import Todo from './Todo.vue';

export default {
  props: ["todos"],
  components: {
    //  Todo
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
      this.$emit("delete-todo", todo);
      sweetalert("Deleted!", "Your To-Do has been deleted.", "success");
    },
    completeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos[todoIndex].done = true;
      this.$emit("complete-todo", todo);
      sweetalert("Success!", "To-Do completed!", "success");
    },
    showForm() {
      this.isEditing = true;
    },
    hideForm() {
      this.isEditing = false;
    },
  },
};
</script>

<style scoped>
p.tasks {
  text-align: center;
}
div.card {
  width: 300px;
  height: 100px;
  padding: 100px;
  border: 1px solid red;
}
div.buttonPass {
  background-color: green;
}
div.buttonPending {
  background-color: orange;
}
</style>

