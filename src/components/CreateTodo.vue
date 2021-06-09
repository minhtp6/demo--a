<template>
  <div class="ui basic content center aligned segment">
    <div class="content">
      <table class="create">
        <tr class="create">
          <td class="create">
            <label>Title</label>
          </td>
          <td class="create">
            <input v-model="titleText" type="text" />
          </td>
        </tr>
        <tr class="create">
          <td class="create">
            <label>Project</label>
          </td>
          <td class="create">
            <input v-model="projectText" type="text" />
          </td>
        </tr>
        <tr class="create">
          <td class="create"></td>
          <td class="create">
            <button class="bluebutton" v-on:click="sendForm()">Create</button>
            <button class="redbutton" v-on:click="closeForm">Cancel</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>

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
    sendForm() {
      if (this.titleText.length > 0 && this.projectText.length > 0) {
        const title = this.titleText;
        const project = this.projectText;
        this.$emit("create-todo", {
          title,
          project,
          done: false,
        });
        this.titleText = "";
        this.projectText = "";
        this.isCreating = false;
      //   todos.push(newTodo);
      // sweetalert('Success!', 'To-Do created!', 'success');
      }
    },
    closeForm(){
      this.$modal.hideAll();
    }
  },
};
</script>
<style>
div.cardForm {
  padding: auto;
  width: 300px;
  border: 2px solid greenyellow;
}
button.bluebutton {
  background-color: lightgreen;
}
button.redbutton {
  background-color: red;
}
table.create {
  width: 50px;
  height: 5px;
  border: transparent;
  text-align: center;
}
td.create {
  width: 50px;
  height: 5px;
  border: transparent;
  text-align: left;
}
tr.create {
  width: 50px;
  height: 5px;
  border: transparent;
  text-align: center;
}
</style>