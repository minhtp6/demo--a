<template>
  
      <div>
              <label><h3>Title: </h3></label>
              <input v-model="titleText" type="text" maxlength="50" />
              <label><h3>Project: </h3></label>
              <input v-model="projectText" type="text" maxlength="50" />
              <br>
              <button style="color: green"  v-on:click="sendForm()">Create</button>
              <br>
              <button style="color: red"  v-on:click="closeForm">Cancel</button>
           
      </div>
    
</template>

<script>
import sweetalert from 'sweetalert';
import axios from 'axios';

export default {
  props:['todos'],
  data() {
    return {
      titleText: "",
      projectText: "",
      isCreating: false,
      
    };
  },
  methods: {
    closeForm() {
      this.$modal.hideAll()
    },
    sendForm() {
      let vm= this
      if (this.titleText.length == 0 || this.projectText.length == 0) {
        sweetalert("Error!", "Title and project can't be empty!!!", "error");
      }
      else{
        const title = this.titleText;
        const project = this.projectText;
        this.titleText = "";
        this.projectText = "";
         axios.post('https://60c2b23a917002001739d615.mockapi.io/todos',{
           title,
           project,
           done:false,
         }).then(function (response){
        if(response.status == 201){
          sweetalert('Success!', 'To-Do created!', 'success');
          console.log(vm.todos);
          vm.todos.push({
           title,
           project,
           done:false,
         });
        }
      }).finally(() =>this.$modal.hideAll());
      }
    },
  },
};
</script>

<style scoped module>
div{
  padding-top: 30px;
  padding-left: 225px;
  margin: auto;
}
button{
  padding-left: 225px;
  margin: auto;
  margin-top: 5px;
  background-color:skyblue;
  padding-top: 10px;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  width: 175px;
  margin-bottom:10px;
  opacity: 0.8;
}

</style>