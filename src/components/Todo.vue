<template>
  <div class='cardtodo' >
    <div class="content" v-show="!isEditing">
      <div class='header'>
          {{ todo.title }}
      </div>
      <div class='meta'>
          {{ todo.project }}
      </div>
      <div class='extra content'>
          <span class='edit' v-on:click="showForm">
          <i class='edit icon'>Edit</i>
        </span>
        <i> // </i>
        <span class='trash' v-on:click="deleteTodo(todo)">
          <i class='trash icon'>Delete</i>
        </span>
      </div>
    </div>
    <div class="content" v-show="isEditing">
      <div class='ui form'>
        <div class='field'>
          <label>Title</label>
          <input type='text' v-model="todo.title" >
        </div>
        <div class='field'>
          <label>Project</label>
          <input type='text' v-model="todo.project" >
        </div>
        <div class='ui two button attached buttons'>
          <button class='ui basic blue button' v-on:click="hideForm">
            Close X
          </button>
        </div>
      </div>
    </div>
    <div class='buttonPass' v-show="!isEditing &&todo.done" disabled>
        Completed
    </div>
    <div class='buttonPending' v-on:click="completeTodo(todo)" v-show="!isEditing && !todo.done">
        Pending
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: ['todo'],
    data() {
      return {
        isEditing: false,
      };
    },
    methods: {
      completeTodo(todo) {
        this.$emit('complete-todo', todo);
      },
      deleteTodo(todo) {     
        this.$emit('delete-todo', todo);
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
<style>
div.cardtodo {
  width: 300px;
  height: 100px;
  padding: inherit;
  border: 1px solid red;
}
div.buttonPass {
  background-color: green;
}
div.buttonPending {
  background-color: orange;
}
span.edit {
  border-bottom-color: mediumspringgreen;
  background-color: mediumspringgreen;
}
span.trash{
  border-bottom-color: firebrick;
  background-color: firebrick;
}
</style>
