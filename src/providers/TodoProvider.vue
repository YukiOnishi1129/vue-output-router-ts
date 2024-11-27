<script setup lang="ts">
import { provide } from "vue";
import { useTodoProvider } from "../composables/useTodoProvider";

const {
  originTodoList,
  showTodoList,
  searchKeyword,
  handleAddTodo,
  handleUpdateTodo,
  handleDeleteTodo,
} = useTodoProvider();

provide("originTodoList", originTodoList);
provide("showTodoList", showTodoList);
provide("searchKeyword", searchKeyword);
provide("handleAddTodo", handleAddTodo);
provide("handleUpdateTodo", handleUpdateTodo);
provide("handleDeleteTodo", handleDeleteTodo);
</script>

<template>
  <slot />
</template>
