<script setup lang="ts">
import AccordionItem from "./AccordionItem.vue";
import User from "../types/User";

const HEADINGS = ["Name", "Email", "Phone", "Website"];

type Props = {
  users: Array<User>;
};

const { users } = defineProps<Props>();
  const emit = defineEmits<{
  (e: "edituser", newUserData: User): void;
}>();

const onEditUser = (newUserData: User) => {
  emit("edituser", newUserData)
}
</script>

<template>
  <div class="py-8 px-14">
    <table class="w-full border-separate border-spacing-0 text-grey overflow-hidden">
      <thead class="text-xs text-grey bg-white relative z-10">
        <th class="w-10"></th>
        <th v-for="heading in HEADINGS" :key="heading" class="text-left opacity-50 font-normal py-2">{{ heading }}</th>
        <th class="w-10 py-3"></th>
      </thead>
      <tbody>
        <!-- <AccordionItem :key="users[0].id" :user="users[0]" /> -->
        <AccordionItem v-for="user in users" :key="user.id" :user="user" @edituser="onEditUser" />
      </tbody>
    </table>
  </div>
</template>
