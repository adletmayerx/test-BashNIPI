<script setup lang="ts">
import clsx from "clsx";
import { ref } from "vue";
import User from "../types/User";
import { DownArrowIcon } from "./icons";

type Props = {
  user: User;
};

defineProps<Props>();
const emit = defineEmits<{
  (e: "toggledetailsbuttonclick"): void;
}>();

const isDetailsVisible = ref(false);

const handleToggleDetailsButtonClick = () => {
  emit("toggledetailsbuttonclick");
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
</template>
