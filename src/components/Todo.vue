<template>
  <div style="overflow-x: auto">
    
      <tr>
        <td>
          {{ todo.title }}
        </td>
        <td>
          {{ todo.project }}
        </td>
        <td >
          <div v-show="todo.done" disabled>Completed</div>
          <div
            v-on:click="completeTodo(todo)"
            v-show="!todo.done"
          >
            Pending
          </div>
        </td>
        <td class="button">
          <button v-on:click="showEdit(todo)">
            <i>Edit</i>
          </button>
        </td>
        <td class="button">
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
  width: 300px;
  max-width: 300px;
  text-overflow: inherit;
  text-rendering: auto;
  text-align: left;
  vertical-align: middle;
  border: 1px dotted grey;
  table-layout: fixed;
}
button {
  text-align:center;
  padding: 10px;
  width: 100px;
  border-radius: 10px;
}
</style>
