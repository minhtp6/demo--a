<template>
  <div style="overflow-x: auto">
    
      <tr>
        <td>
          {{ todo.title }}
        </td>
        <td>
          {{ todo.project }}
        </td>
        <td class="status">
          <div class="buttonPass" v-show="todo.done" disabled>Completed</div>
          <div
            class="buttonPending"
            v-on:click="completeTodo(todo)"
            v-show="!todo.done"
          >
            Pending
          </div>
        </td>
        <td class="button">
          <button class="edit" v-on:click="showEdit(todo)">
            <i>Edit</i>
          </button>
        </td>
        <td class="button">
          <button class="trash" v-on:click="deleteTodo(todo)">
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
  padding: 10px;
  width: 400px;
  height: 100px;
  vertical-align: middle;
  text-overflow: inherit;
  border: 1px dotted grey;
}
.td.status {
  text-align: center;
  padding: 10px;
  max-width: 75px;
}
.td.button {
  text-align:center;
  padding: 10px;
  width: 50px;
}
</style>
