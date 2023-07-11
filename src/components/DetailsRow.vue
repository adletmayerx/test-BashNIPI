<script setup lang="ts">
import { CheckIcon } from "./icons";
import Details from "./Details.vue";
import User from "../types/User";
import { ref } from "vue";
import { InputChangeParams } from "./shared/LabelVue.vue";
import { useUsersStore } from "../stores/users";

type Props = {
  user: User;
};

const { user } = defineProps<Props>();
const { editUser } = useUsersStore();
// const emit = defineEmits<{
//   (e: "edituser", newUserData: User): void;
// }>();

const isSaveButtonDisabled = ref(true);
const newUserData: User = JSON.parse(JSON.stringify(user));
let changedUserData: any = {};

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

  editUser(newUserData);

  changedUserData = {};

  isSaveButtonDisabled.value = true;
};
</script>

<template>
  <tr class="bg-white relative">
    <td colspan="6">
      <form class="flex items-start py-1 px-9 gap-3" @submit.prevent="handleSaveButtonClick">
        <Details
          :user="user"
          :newUserData="newUserData"
          :changedUserData="changedUserData"
          @inputchange="onInputChange"
        ></Details>
        <button type="submit" :disabled="isSaveButtonDisabled" title="Сохранить изменения">
          <CheckIcon :isDisabled="isSaveButtonDisabled" />
        </button>
      </form>
    </td>
  </tr>
</template>
