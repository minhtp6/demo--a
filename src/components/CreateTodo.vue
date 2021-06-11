<template>
  <div class="ui basic content center aligned segment">
    <button
      class="ui basic button icon"
      v-on:click="openForm"
      v-show="!isCreating"
    >
      <i class="plus icon">+</i>
    </button>
    <div v-show="isCreating">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      titleText: "",
      projectText: "",
      isCreating: false,
    };
  },
  methods: {
    openForm() {
      console.log(this.$session.getAll())
      this.isCreating = true;
    },
    closeForm() {
      this.isCreating = false;
    },
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
      }
    },
  },
};
</script>
<style>
div.cardForm {
  padding: auto;
  width: 300px;
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