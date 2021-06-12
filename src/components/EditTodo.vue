<template>
  <div>
    <h2>Edit: {{ todo.title }}</h2>
    <label><h3>Title:</h3> </label>
    <input type="text" :value="todo.title" id="title" maxlength="40" />
    <br />
    <label><h3>Project:</h3> </label>
    <input type="text" :value="todo.project" id="project" maxlength="40" />
    <br />
    <br />
    <button v-on:click="hideForm">Save</button>
    <br />
    <button style="color: red" v-on:click="closeForm">Close</button>
  </div>
</template>
<script type="text/javascript">
import axios from "axios";
import sweetalert from "sweetalert";
export default {
  props: ["todo"],
  data() {
    return {
      todos: null,
    };
  },
  mounted() {
    let vm = this;
    axios
      .get("https://60c2b23a917002001739d615.mockapi.io/todos")
      .then(function (reponse) {
        if (reponse.status == 200) {
          vm.todos = reponse.data;
        } else {
          sweetalert("Failed!", "Can Not Connect To Server!", "error");
        }
      });
  },
  created() {
    this.todoBefore = Object.assign({}, this.todo);
  },
  methods: {
    closeForm() {
      Object.assign(this.todo, this.todoBefore);
      this.$modal.hideAll();
    },
    hideForm() {
      let vm = this;

      if (
        document.getElementById("title").value == "" ||
        document.getElementById("project").value == ""
      ) {
        sweetalert("Error!", "Title and project can't be empty!!!", "error");
      } else {
        console.log(vm.todos)
        for (var i = 0; i < vm.todos.length; i++) {
          if (vm.todos[i].title.trim == document.getElementById("title").value.trim) {
            sweetalert("Error!", "Title is exist!!!", "error");
            break;
          } else {
            vm.todo.title = document.getElementById("title").value;
            vm.todo.project = document.getElementById("project").value;
            vm.$loading(true);
            vm.$modal.hideAll();
            axios
              .put(
                "https://60c2b23a917002001739d615.mockapi.io/todos/" +
                  this.todo.id,
                this.todo
              )
              .then(function (respone) {
                if (respone.status == 200) {
                  vm.$loading(false);
                  sweetalert("Success!", "To-Do edited!", "success");
                }
              });
              break;
          }
        }
      }
    },
  },
};
</script>
<style scoped module>
button {
  padding-left: 225px;
  margin: auto;
  margin-top: 5px;
  background-color: skyblue;
  color: white;
  padding-top: 10px;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  width: 175px;
  margin-bottom: 8px;
  opacity: 0.8;
}
div {
  padding-top: 0.5px;
  padding-left: 225px;
  margin: auto;
}
label {
  font-weight: bold;
  font-size: 18;
}
</style>