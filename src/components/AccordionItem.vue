<script setup lang="ts">
import DetailsRow from "./DetailsRow.vue";
import MainRow from "./MainRow.vue";
import User from "../types/User";
import { ref } from "vue";

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
  <MainRow :user="user" @toggledetailsbuttonclick="handleToggleDetailsButtonClick"   />
  <Transition
    enter-active-class="duration-300 ease-out"
    enter-from-class="transform opacity-0 translate-x-full"
    enter-to-class="opacity-100 translate-x-0"
    leave-active-class="duration-200 ease-in"
    leave-from-class="opacity-100 translate-x-0"
    leave-to-class="transform opacity-0 translate-x-full"
  >
    <DetailsRow v-if="isDetailsVisible" :user="user" />
  </Transition>
</template>
