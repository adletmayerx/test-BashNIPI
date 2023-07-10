<script setup lang="ts">
import { DownArrowIcon } from "./icons";
import DetailsRow from "./DetailsRow.vue";
import User from "../types/User";
import { ref } from "vue";
import clsx from "clsx";

type Props = {
  user: User;
};

const { user } = defineProps<Props>();
const emit = defineEmits<{
  (e: "edituser", newUserData: User): void;
}>();

const isDetailsVisible = ref(false);

const handleToggleDetailsButtonClick = () => {
  isDetailsVisible.value = !isDetailsVisible.value;
};

const onEdituser = (newUserData: User) => {
  emit("edituser", newUserData);
};
</script>

<template>
  <tr class="text-sm bg-white z-10 relative">
    <td class="p-2 rounded-l border border-r-0 border-yellow">
      <button
        type="button"
        :title="isDetailsVisible ? 'Скрыть подробную информацию' : 'Показать подробную информацию'"
        @click="handleToggleDetailsButtonClick"
        :class="clsx('transition-transform duration-300', [isDetailsVisible && '-scale-y-100'])"
      >
        <DownArrowIcon />
      </button>
    </td>
    <td class="border-t border-b border-yellow text-ellipsis overflow-hidden max-w-[100px] px-3">{{ user.name }}</td>
    <td class="border-t border-b border-yellow text-ellipsis overflow-hidden max-w-[100px] px-3">{{ user.email }}</td>
    <td class="border-t border-b border-yellow text-ellipsis overflow-hidden max-w-[100px] px-3">{{ user.phone }}</td>
    <td class="border-t border-b border-yellow text-ellipsis overflow-hidden max-w-[100px] px-3">{{ user.website }}</td>
    <td class="border border-l-0 rounded-r border-yellow"></td>
  </tr>
  <Transition
    enter-active-class="duration-300 ease-out"
    enter-from-class="transform opacity-0 translate-x-full"
    enter-to-class="opacity-100 translate-x-0"
    leave-active-class="duration-200 ease-in"
    leave-from-class="opacity-100 translate-x-0"
    leave-to-class="transform opacity-0 translate-x-full"
  >
    <DetailsRow v-if="isDetailsVisible" :user="user" @edituser="onEdituser" />
  </Transition>
</template>
