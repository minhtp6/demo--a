<template>
  <div>
    <label><h3>Title:</h3> </label>
    <input type="text" v-model="todo.title" maxlength="40" />
    <br />
    <label><h3>Project:</h3> </label>
    <input type="text" v-model="todo.project" maxlength="40" />
    <br />
    <br />
    <button v-on:click="hideForm">Save</button>
  </div>
</template>
<script type="text/javascript">
import axios from "axios";
import sweetalert from "sweetalert";
export default {
  props: ["todo"],
  methods: {
    hideForm() {
      let vm = this;
      if (this.todo.title == "" || this.todo.project == "") {
        sweetalert("Error!", "Title and project can't be empty!!!", "error");
      } else {
        vm.$loading(true);
        vm.$modal.hideAll();
        axios
          .put(
            "https://60c2b23a917002001739d615.mockapi.io/todos/" + this.todo.id,
            this.todo
          )
          .then(function (respone) {
            if (respone.status == 200) {
              sweetalert("Success!", "To-Do edited!", "success");
            } else {
              sweetalert("Failed!", "Can Not Connect To Server!", "error");
            }
          })
          .finally(() => {
            this.$loading(false);
          });
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
  margin-bottom: 10px;
  opacity: 0.8;
}
div {
  padding-top: 30px;
  padding-left: 225px;
  margin: auto;
}
label {
  font-weight: bold;
  font-size: 18;
}
</style>