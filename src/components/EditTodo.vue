<template>
  <div>
    <table>
      <tr>
        <td>
          <div class="field">
            <label>title</label>
            <input type="text" v-model="todo.title" />
          </div>
        </td>
        <td>
          <div class="field">
            <label>project</label>
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
  </div>
</template>
<script type="text/javascript">
import EventBus from './EventBus'
export default {
  props: ["todo"],
  methods: {
    hideForm() {
      const todo = {
        title: this.title,
        project: this.project,
      };
      EventBus.$emit("hide-form", todo);
    },
  },
};
</script>
<style>
table {
  width: 500px;
  padding: inherit;
  border: 0.5px solid red;
}
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
td {
  width: 100px;
  height: 50px;
  border: 0.1px solid black;
  text-align: center;
}
button.okbtn {
  background-color: lawngreen;
}
</style>