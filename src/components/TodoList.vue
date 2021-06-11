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
    <todo
      v-for="(todo,k) of todos"
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
import axios from 'axios';
export default {
  props: ["todos"],
  components: {
    Todo,
  },
  data() {
    return {
      
    };
  },
 
  methods: {
    deleteTodo(todo) {
      const todoIndex = todo.id;
      axios.delete('https://60c2b23a917002001739d615.mockapi.io/todos/' +todoIndex).then(function (response){
        if(response.status==200){
          sweetalert("Deleted!", "Your To-Do has been deleted.", "success");
          window.setTimeout(function(){location.reload()},800);
        }
      });
     
    },
    completeTodo(todo) {
      const todoIndex = todo.id;

      todo.done = true;
      axios.put('https://60c2b23a917002001739d615.mockapi.io/todos/' +todoIndex,todo).then(function (response){
        if(response.status ==200){
          sweetalert("Success!", "To-Do completed!", "success");
          window.setTimeout(function(){location.reload()},800);
        }
      })
      
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
  max-width: 900px;
  table-layout: auto;
}
</style>

