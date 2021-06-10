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
          <input type="text" v-model="todo.title" />
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
          <input type="text" v-model="todo.project" />
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
import EventBus from "./EventBus";
export default {
  props: ["todo"],
  methods: {
    hideForm() {
      const todo = {
        title: this.title,
        project: this.project,
      };
      EventBus.$emit("hide-form", todo);
      this.$modal.hideAll();
    },
  },
};
</script>
<style>
div.buttonPass {
  background-color: green;
}
div.buttonPending {
  background-color: orange;
}
button.edit {
  background-color: mediumspringgreen;
  border-radius: 5pt;
}
button.trash {
  background-color: firebrick;
  border-radius: 5pt;
}
button.okbtn {
  background-color: lawngreen;
}
div.editTodo {
  padding: 50;
}
label {
  font-weight: bold;
  font-size: 18;
}
</style>