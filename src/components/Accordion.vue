<script setup lang="ts">
import { AccordionItem } from ".";
import User from "../types/User";

const HEADINGS = ["Name", "Email", "Phone", "Website"];

type Props = {
  users: Array<User>;
};

const { users } = defineProps<Props>();
</script>

<template>
  <div class="container">
    <table class="table">
      <thead class="table-head">
        <th class="table-head__heading table-head__heading_side"></th>
        <th v-for="heading in HEADINGS" :key="heading" class="table-head__heading table-head__heading_main">
          {{ heading }}
        </th>
        <th class="table-head__heading table-head__heading_side"></th>
      </thead>
      <tbody>
        <AccordionItem v-for="user in users" :key="user.id" :user="user" />
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.container {
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 3.5rem;
  padding-right: 3.5rem;
}

.table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  color: var(--grey);
  overflow: hidden;
}

.table-head {
  font-size: 0.75rem;
  line-height: 1rem;
  background-color: white;
  position: relative;
  z-index: 2;
}

.table-head__heading_side {
  width: 2.5rem;
}

.table-head__heading_main {
  text-align: left;
  opacity: 0.5;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
</style>
