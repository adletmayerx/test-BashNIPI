<script setup lang="ts">
import { DownArrowIcon, CheckIcon } from "./icons";
import Details from "./Details.vue";
import User from "../types/User";
import { ref } from "vue";

type Props = {
  user: User;
};

defineProps<Props>();

const isDetailsVisible = ref(false)

const handleDownArrowButtonClick = () => {
  isDetailsVisible.value = !isDetailsVisible.value;
}

</script>

<template>
  <tr class="text-sm bg-white z-10 relative">
    <td class="p-2 rounded-l border border-r-0 border-yellow">
      <button type="button" @click="handleDownArrowButtonClick">
        <DownArrowIcon />
      </button>
    </td>
    <td class="border-t border-b border-yellow">{{ user.name }}</td>
    <td class="border-t border-b border-yellow">{{ user.email }}</td>
    <td class="border-t border-b border-yellow">{{ user.phone }}</td>
    <td class="border-t border-b border-yellow">{{ user.website }}</td>
    <td class="border border-l-0 rounded-r border-yellow"></td>
  </tr>
  <Transition enter-active-class="duration-300 ease-out" enter-from-class="transform opacity-0 translate-x-full"
    enter-to-class="opacity-100 translate-x-0" leave-active-class="duration-200 ease-in" leave-from-class="opacity-100 translate-x-0"
    leave-to-class="transform opacity-0 translate-x-full">
    <tr v-if="isDetailsVisible" class="bg-white relative">
      <td colspan="6">
        <div class="flex items-start py-3 px-9 gap-3">
          <Details :user="user"></Details>
          <button type="button">
            <CheckIcon />
          </button>
        </div>
      </td>
    </tr>
  </Transition>
</template>
