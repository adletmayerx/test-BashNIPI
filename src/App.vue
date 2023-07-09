<script setup lang="ts">
import Header from "./components/Header.vue";
import Accordion from "./components/Accordion.vue";
import { onBeforeMount, ref } from "vue";
import type User from "./types/User";

const users = ref<Array<any>>([]);

const onEditUser = (user: User) => {
  console.log(user);
  debugger;
  for (let [i, _user] of users.value.entries()) {
    if (user.id !== _user.id) {
      continue;
    }
    debugger;
    // _user = {...user};
    users.value.splice(i, 1, user);

    break;
  }

  localStorage.setItem("users", JSON.stringify(users.value));
  console.log("users", users);
};

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
  <Accordion v-if="users.length" :users="users" @edituser="onEditUser" />
</template>
