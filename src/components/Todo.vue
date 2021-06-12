<template>
  <div style="overflow-x: auto">
    <tr>
      <td scope="col" width="400px">
        {{ todo.title }}
      </td>
      <td scope="col" width="400px">
        {{ todo.project }}
      </td>
      <td scope="col" width="100px">
        <button v-show="todo.done" style="color: green" disabled>
          Completed
        </button>
        <button v-on:click="completeTodo(todo)" style="color: red" v-show="!todo.done">
          Pending
        </button>
      </td>
      <td scope="col" width="100px">
        <button v-on:click="showEdit(todo)">
          <i>Edit</i>
        </button>
      </td>
      <td scope="col" width="100px">
        <button v-on:click="deleteTodo(todo)">
          <i>Delete</i>
        </button>
      </td>
    </tr>
  </div>
</template>

<script type="text/javascript">
export default {
  props: ["todo"],
  data() {
    return {};
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
td {
  text-align: left;
  border: 1px dotted grey;
}
button {
  text-align: center;
  padding: 10px;
  width: 100px;
  border-radius: 10px;
  border: 0.5px solid;
}
</style>
