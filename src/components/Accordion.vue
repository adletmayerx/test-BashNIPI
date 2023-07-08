<script setup lang="ts">
import AccordionItem from "./AccordionItem.vue";
import User from "../types/User";

type Props = {
  users: Array<User>;
};

defineProps<Props>();
</script>

<template>
  <div class="py-8 px-14">
    <div class="p-3 pl-10 flex">
      <ul class="flex justify-between text-grey text-sm grow ml-5 gap-8">
        <li>
          <p> Name </p>
        </li>
        <li>
          <p> Email </p>
        </li>
        <li>
          <p> Phone </p>
        </li>
        <li>
          <p> Website </p>
        </li>
      </ul>
      <div class="grow shrink"></div>
    </div>
    <ul class="flex flex-col gap-3 ">
      <li v-for="user in users" :key="user.id">
        <AccordionItem :user="user" />
      </li>
    </ul>
  </div>
</template>
