<script setup lang="ts">
import { DownArrowIcon, CheckIcon } from "./icons";
import Details from "./Details.vue";
import User from "../types/User";

type Props = {
  user: User;
};

defineProps<Props>();
</script>

<template>
  <tr>
    <td class="p-4 rounded-l border border-r-0 border-yellow">
      <button type="button">
        <DownArrowIcon />
      </button>
    </td>
    <td class="border-t border-b border-yellow">{{ user.name }}</td>
    <td class="border-t border-b border-yellow">{{ user.email }}</td>
    <td class="border-t border-b border-yellow">{{ user.phone }}</td>
    <td class="border-t border-b border-yellow">{{ user.website }}</td>
    <td class="border border-l-0 rounded-r border-yellow"></td>
  </tr>
  <tr class="">
    <td colspan="6">
      <div class="flex items-start py-3 px-9 gap-3">
        <Details :user="user"></Details>
        <button type="button">
          <CheckIcon />
        </button>
      </div>
    </td>
  </tr>
</template>
