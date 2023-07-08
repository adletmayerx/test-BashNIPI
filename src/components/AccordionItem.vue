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
  <div class="border rounded border-yellow p-3 flex">
    <button type="button">
      <DownArrowIcon />
    </button>
    <ul class="flex justify-between text-grey text-sm grow ml-5 gap-8">
      <li>
        <p>{{ user.name }}</p>
      </li>
      <li>
        <p>{{ user.email }}</p>
      </li>
      <li>
        <p>{{ user.phone }}</p>
      </li>
      <li>
        <p>{{ user.website }}</p>
      </li>
    </ul>
    <div class="grow shrink"></div>
  </div>
  <div class="flex gap-5 px-10 mt-3 items-start">
    <Details :user="user"></Details>
    <button type="button">
      <CheckIcon />
    </button>
  </div>
</template>
