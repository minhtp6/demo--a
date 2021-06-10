<template>
  <div class="cardtodo" >
    <div class="content">
      <table>
        <tr>
          <td>
            <div class="header">
              {{ todo.title }}
            </div>
          </td>
          <td>
            <div class="meta">
              {{ todo.project }}
            </div>
          </td>
          <td>
            <div class="buttonPass" v-show="todo.done" disabled>
              Completed
            </div>
            <div
              class="buttonPending"
              v-on:click="completeTodo(todo)"
              v-show="!todo.done"
            >
              Pending
            </div>
          </td>
          <td>
            <button class="edit" v-on:click="showEdit(todo)">
              <i class="edit icon">Edit</i>
            </button>
          </td>
          <td>
            <button class="trash" v-on:click="deleteTodo(todo)">
              <i class="trash icon">Delete</i>
            </button>
          </td>
        </tr>
      </table>
    </div>

    <!-- <div class="content" v-show="isEditing">
      <table>
        <tr>
          <td>
            <div class="field">
              <input type="text" v-model="todo.title" />
            </div>
          </td>
          <td>
            <div class="field">
              <input type="text" v-model="todo.project" />
            </div>
          </td>
          <td>
            <div class="ui two button attached buttons">
              <button class="okbtn" v-on:click="hideForm">Save</button>
            </div>
          </td>
        </tr>
      </table>
    </div> -->
  </div>
</template>

<script type="text/javascript">
import EventBus from './EventBus'
import sweetalert from 'sweetalert'
//import EditTodoVue from "./EditTodo.vue";
export default {
  props: ["todo"],
  data() {
    return {
      
    };
  },
  created() {
    
    EventBus.$on('hide-form',()=>{
      sweetalert("Success!", "To-Do edited!", "success");
    });
  },
  methods: {
    completeTodo(todo) {
      this.$emit("complete-todo", todo);
    },
    deleteTodo(todo) {
      this.$emit("delete-todo", todo);
    },
    showEdit(todo) {
      this.$emit("edit-todo", todo);
    },
  },
};
</script>
<style scoped module>
table {
  width: 500px;
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
span.trash {
  border-bottom-color: firebrick;
  background-color: firebrick;
}
td {
  width: 100px;
  height: 50px;
  border: 0.5px solid black;
  text-align: center;
}
button.okbtn {
  background-color: lawngreen;
}
</style>
