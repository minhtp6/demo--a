<template>
  <div class="app" id="app">
    <h1 >Vue.js Todo App</h1>
    <div >
      <div class='column'>
        <!-- <create-todo v-on:create-todo="createTodo"></create-todo> -->
        <button v-on:click="showDialog()" v-on:create-todo="createTodo(newTodo)">+</button>
        <todo-list v-bind:todos="todos"></todo-list>
        
      </div>
    </div>
  </div>
</template>

<script>
import sweetalert from 'sweetalert';
import TodoList from './TodoList';
import CreateTodo from './CreateTodo';

export default {
  name: 'app',
  components: {
    TodoList,
    
  },
  data() {
    return {
      todos: [{
        title: 'Todo A',
        project: 'Project A',
        done: false,
      }, {
        title: 'Todo B',
        project: 'Project B',
        done: true,
      }, {
        title: 'Todo C',
        project: 'Project C',
        done: false,
      }, {
        title: 'Todo D',
        project: 'Project D',
        done: false,
      }],
    };
  },
  methods: {
    createTodo(newTodo) {
      this.todos.push(newTodo);
      sweetalert('Success!', 'To-Do created!', 'success');
    },
    showDialog() {
      this.$modal.show(CreateTodo);
    },
  },
};
</script>
<style>
</style>