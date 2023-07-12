<script setup lang="ts">
import clsx from "clsx";
import User from "../types/User";
import { DownArrowIcon } from "./icons";

type Props = {
  user: User;
  isDetailsVisible: boolean;
};

defineProps<Props>();
const emit = defineEmits<{
  (e: "toggledetailsbuttonclick"): void;
}>();

const handleToggleDetailsButtonClick = () => {
  emit("toggledetailsbuttonclick");
};
</script>

<template>
  <tr class="row">
    <td class="row__side-cell row__side-cell_left">
      <button
        type="button"
        :title="isDetailsVisible ? 'Скрыть подробную информацию' : 'Показать подробную информацию'"
        @click="handleToggleDetailsButtonClick"
        :class="clsx('cell__button', [isDetailsVisible && 'cell__button_open'])"
      >
        <DownArrowIcon />
      </button>
    </td>
    <td class="row__cell">{{ user.name }}</td>
    <td class="row__cell">{{ user.email }}</td>
    <td class="row__cell">{{ user.phone }}</td>
    <td class="row__cell">{{ user.website }}</td>
    <td class="row__side-cell row__side-cell_right"></td>
  </tr>
</template>

<style scoped>
.row {
  font-size: 0.875rem /* 14px */;
  line-height: 1.25rem /* 20px */;
  background-color: white;
  z-index: 2;
  position: relative;
}

.cell__button {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.cell__button_open {
  transform: scale(1, -1);
}

.row__cell {
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: #ffd200;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 100px;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

.row__side-cell {
  border: #ffd200 solid 1px;
}

.row__side-cell_left {
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  border-right-width: 0px;
  padding: 0.5rem;
}

.row__side-cell_right {
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  border-left-width: 0px;
}
</style>
