<script setup lang="ts">
import NavigationList from "../Molecules/NavigationList.vue";

type Props = {
  title: string;
};

const { title } = defineProps<Props>();
</script>

<template>
  <div class="container">
    <section class="common">
      <NavigationList />
    </section>
    <h1 class="title">
      {{ title }}
    </h1>
    <slot />
  </div>
</template>

<style scoped>
.container {
  width: 50%;
  margin: 80px auto;
}

.title {
  text-align: center;
  font-family: "Times New Roman", Times, serif;
  color: #fff;
  font-size: 48px;
}

.common {
  width: 80%;
  margin: 40px auto;
}
</style>
