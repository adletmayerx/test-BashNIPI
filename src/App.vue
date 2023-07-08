<script setup lang="ts">
import Header from "./components/Header.vue";
import Accordion from "./components/Accordion.vue";
import { onBeforeMount, ref } from "vue";

const users = ref<Array<any>>([]);

onBeforeMount(async () => {
  const cachedUsers = localStorage.getItem("users");

  if (cachedUsers) {
    users.value = JSON.parse(cachedUsers);

    return;
  }

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    users.value = data;
    localStorage.setItem("users", JSON.stringify(data));
  } catch (e) {
    console.error(e);
  }
});
</script>

<template>
  <Header />
  <Accordion v-if="users.length" :users="users" />
</template>
