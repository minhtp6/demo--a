<template>
  <div class="editTodo">
    <table>
      <tr>
      <td>
        <tr>
          <label>title</label>
        </tr>
      </td>
      <td>
        <tr>
          <input type="text" v-model="todo.title" maxlength="50"/>
        </tr>
      </td>
      </tr>
      <tr>
      <td>
        <tr>
          <label>project</label>
        </tr>
      </td>
      <td>
        <tr>
          <input type="text" v-model="todo.project" maxlength="50"/>
        </tr>
      </td>
      </tr>
      <tr>
      <td></td>
      <td>
        <div class="ui two button attached buttons">
          <button class="okbtn" v-on:click="hideForm">Save</button>
        </div>
      </td>
      </tr>
    </table>
  </div>
</template>
<script type="text/javascript">

import axios from 'axios';
import sweetalert from 'sweetalert';
export default {
  props: ["todo"],
  methods: {
    hideForm() {
      if(this.todo.title==''||this.todo.project==''){
        sweetalert("Error!", "Title and project can't be empty!!!", "error");
      }else{
      axios.put('https://60c2b23a917002001739d615.mockapi.io/todos/' + this.todo.id,this.todo).then(function (respone){
        if(respone.status ==200){
          sweetalert("Success!", "To-Do edited!", "success");
        }
      }).finally(() =>this.$modal.hideAll());
      }
    },
  },
};
</script>
<style scoped module>
button{
  border-radius: 10px;
}

div.editTodo {
  padding: 50;
}
label {
  font-weight: bold;
  font-size: 18;
}
</style>