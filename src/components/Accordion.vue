<script setup lang="ts">
import AccordionItem from "./AccordionItem.vue";
import User from "../types/User";

const HEADINGS = ['Name', "Email", 'Phone', 'Website']

type Props = {
  users: Array<User>;
};

defineProps<Props>();
</script>

<template>
  <div class="py-8 px-14">
    <table class="w-full border-separate border-spacing-0 text-grey ">
      <thead class="text-sm">
        <th class="w-10"></th>
        <th v-for="heading in HEADINGS" :key="heading" class="text-left"> {{ heading }} </th>
        <th class="w-10"></th>
      </thead>
      <tbody>
        <AccordionItem :key="users[0].id" :user="users[0]" />
      </tbody>
    </table>
  </div>
</template>
