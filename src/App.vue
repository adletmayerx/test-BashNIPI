<script setup lang="ts">
import { storeToRefs } from "pinia";
import { onBeforeMount } from "vue";
import { Accordion, Header } from "./components";
import { useUsersStore } from "./stores/users";

const store = useUsersStore();
const { users } = storeToRefs(store);
const { setUsers } = store;

onBeforeMount(async () => {
  const cachedUsers = localStorage.getItem("users");

  if (cachedUsers) {
    setUsers(JSON.parse(cachedUsers));

    return;
  }

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    setUsers(data);
  } catch (e) {
    console.error(e);
  }
});
</script>

<template>
  <Header />
  <Accordion v-if="users.length" :users="users" />
</template>
