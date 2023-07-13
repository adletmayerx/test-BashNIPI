<script setup lang="ts">
import { ref } from "vue";
import { DetailsRow, MainRow } from ".";
import User from "../types/User";

type Props = {
  user: User;
};

const { user } = defineProps<Props>();
const isDetailsVisible = ref(false);

const handleToggleDetailsButtonClick = () => {
  isDetailsVisible.value = !isDetailsVisible.value;
};
</script>

<template>
  <MainRow
    :user="user"
    @toggledetailsbuttonclick="handleToggleDetailsButtonClick"
    :isDetailsVisible="isDetailsVisible"
  />
  <Transition>
    <DetailsRow v-show="isDetailsVisible" :user="user" />
  </Transition>
</template>

<style scoped>
.v-enter-active {
  transition: all 0.3s ease-out;
}
.v-leave-active {
  transition: all 0.2s ease-in;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
