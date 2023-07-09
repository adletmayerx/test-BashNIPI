<script setup lang="ts">
import { DownArrowIcon, CheckIcon } from "./icons";
import Details from "./Details.vue";
import User from "../types/User";
import { ref } from "vue";
import clsx from "clsx";
import { InputChangeParams } from "./shared/LabelVue.vue";

type Props = {
  user: User;
};

const { user } = defineProps<Props>();
const emit = defineEmits<{
  (e: "edituser", newUserData: User): void;
}>();

const isDetailsVisible = ref(false);
const isSaveButtonDisabled = ref(true);
const newUserData: User = JSON.parse(JSON.stringify(user));
let changedUserData: any = {};

const handleToggleDetailsButtonClick = () => {
  isDetailsVisible.value = !isDetailsVisible.value;
};

const onInputChange = ({ name, value, block }: InputChangeParams) => {
  switch (block) {
    case "address":
      if (!changedUserData[block]) {
        changedUserData[block] = {};
      }

      newUserData[block][name] = value;
      changedUserData[block][name] = value;

      break;
    case "company":
      if (!changedUserData[block]) {
        changedUserData[block] = {};
      }

      newUserData[block][name] = value;
      changedUserData[block][name] = value;

      break;
    default:
      newUserData[name] = value;
      changedUserData[name] = value;

      break;
  }

  isSaveButtonDisabled.value = false;
};

const handleSaveButtonClick = () => {
  alert(JSON.stringify(changedUserData));

  changedUserData = {};

  emit("edituser", newUserData);

  isSaveButtonDisabled.value = true;
};
</script>

<template>
  <tr class="text-sm bg-white z-10 relative">
    <td class="p-2 rounded-l border border-r-0 border-yellow">
      <button
        type="button"
        @click="handleToggleDetailsButtonClick"
        :class="clsx('transition-transform duration-300', [isDetailsVisible && '-scale-y-100'])"
      >
        <DownArrowIcon />
      </button>
    </td>
    <td class="border-t border-b border-yellow">{{ user.name }}</td>
    <td class="border-t border-b border-yellow">{{ user.email }}</td>
    <td class="border-t border-b border-yellow">{{ user.phone }}</td>
    <td class="border-t border-b border-yellow">{{ user.website }}</td>
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
    <tr v-if="isDetailsVisible" class="bg-white relative">
      <td colspan="6">
        <div class="flex items-start py-1 px-9 gap-3">
          <Details
            :user="user"
            :newUserData="newUserData"
            :changedUserData="changedUserData"
            @inputchange="onInputChange"
          ></Details>
          <button type="button" @click="handleSaveButtonClick" :disabled="isSaveButtonDisabled">
            <CheckIcon :isDisabled="isSaveButtonDisabled" />
          </button>
        </div>
      </td>
    </tr>
  </Transition>
</template>
