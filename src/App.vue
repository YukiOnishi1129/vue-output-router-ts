<script setup lang="ts">
import { ref } from "vue";
import InputForm from "./components/Atoms/InputForm.vue";

const value = ref("");
</script>

<template>
  <InputForm v-model="value" name="value" />
</template>
