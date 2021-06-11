<template>
  <div id="app">
    <h1 >Vue.js Todo App</h1>
    <div >
      <div class='column'>
        <create-todo v-on:create-todo="createTodo"></create-todo>
        <todo-list v-bind:todos="todos"></todo-list>
        
      </div>
    </div>
  </div>
</template>

<script>
import sweetalert from 'sweetalert';
import TodoList from './TodoList';
import CreateTodo from './CreateTodo';
import axios from 'axios';
export default {
  name: 'app',
  components: {
    CreateTodo,
    TodoList,
    
  },
  data() {
    return {
      todos: null,
    };
  },
  mounted() {
    axios.get('https://60c2b23a917002001739d615.mockapi.io/todos').then(reponse =>(this.todos = reponse.data)).bind(this);
    
  },
  ready(){
    this.updateTodos;
  },
  methods: {
    createTodo(newTodo) {
      // this.todos.push(newTodo);
      axios.post('https://60c2b23a917002001739d615.mockapi.io/todos',newTodo).then(function (response){
        if(response.status == 201){
          sweetalert('Success!', 'To-Do created!', 'success');
          window.setTimeout(function(){location.reload()},800);
        }
      });
      
      
     
    },
  },
};
</script>
<style scoped module>
body{
    padding-left: 300px;
    padding-top: 200px;
    color: #6a6f8c;
    background: white;
    font: 600 16px/18px 'Open Sans', sans-serif
}
</style>