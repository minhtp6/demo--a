<template>
  <div>
    <h2>Create New</h2>
    <label><h3>Title:</h3></label>
    <input v-model="titleText" type="text" maxlength="50" />
    <label><h3>Project:</h3></label>
    <input v-model="projectText" type="text" maxlength="50" />
    <br />
    <button style="color: green" v-on:click="sendForm()">Create</button>
    <br />
    <button style="color: red" v-on:click="closeForm">Close</button>
  </div>
</template>

<script>
import sweetalert from "sweetalert";
import axios from "axios";

export default {
  props: ["todos"],
  data() {
    return {
      titleText: "",
      projectText: "",
      isCreating: false,
    };
  },
  methods: {
    closeForm() {
      this.$modal.hideAll();
    },
    sendForm() {
      let vm = this;
      if (this.titleText.length == 0 || this.projectText.length == 0) {
        this.titleText = "";
        this.projectText = "";
        sweetalert("Error!", "Title and project can't be empty!!!", "error");
      } else {
        var title = this.titleText;
        var project = this.projectText;
        this.titleText = "";
        this.projectText = "";
        if (vm.todos.length == 0) {
           vm.$loading(true);
          vm.$modal.hideAll();
          axios
            .post("https://60c2b23a917002001739d615.mockapi.io/todos", {
              title,
              project,
              done: false,
            })
            .then(function (response) {
              if (response.status == 201) {
                const id = response.data.id;
                vm.todos.push({
                  id,
                  title,
                  project,
                  done: false,
                });
                vm.$loading(false);
                sweetalert("Success!", "To-Do created!", "success");
              }
            });
        } else {
          
          for (var i = 0; i < vm.todos.length; i++) {
            if(vm.todos[i].title.trim==title.trim){
              sweetalert("Failed!", "This title is exist!", "error");
              break;
            }else{
               vm.$loading(true);
              vm.$modal.hideAll();
          axios
            .post("https://60c2b23a917002001739d615.mockapi.io/todos", {
              title,
              project,
              done: false,
            })
            .then(function (response) {
              if (response.status == 201) {
                const id = response.data.id;
                vm.todos.push({
                  id,
                  title,
                  project,
                  done: false,
                });
                vm.$loading(false);
                sweetalert("Success!", "To-Do created!", "success");
              }
            });
            break;
            }
          }
        }
      }
    },
  },
};
</script>

<style scoped module>
div {
  padding-top: 10px;
  padding-left: 225px;
  margin: auto;
}
button {
  padding-left: 225px;
  margin: auto;
  margin-top: 5px;
  background-color: skyblue;
  padding-top: 10px;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  width: 175px;
  margin-bottom: 10px;
  opacity: 0.8;
}
</style>