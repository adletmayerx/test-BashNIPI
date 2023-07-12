<script setup lang="ts">
import { ref } from "vue";
import { Details } from ".";
import { useUsersStore } from "../stores/users";
import User from "../types/User";
import { CheckIcon } from "./icons";
import { InputChangeEventParams } from "./shared/DetailsInput.vue";

type Props = {
  user: User;
};

const { user } = defineProps<Props>();
const { editUser } = useUsersStore();

const isSaveButtonDisabled = ref(true);
const newUserData: User = JSON.parse(JSON.stringify(user));
let changedUserData: any = {};
let inputsValidity: Map<string, boolean> = new Map();

const onInputChange = ({ name, value, block, isValid }: InputChangeEventParams) => {
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

  inputsValidity.set(name, isValid);

  let isFormValid = true;

  for (let entry of inputsValidity) {
    if (entry[1] === false) {
      isFormValid = false;
      break;
    }
  }

  isSaveButtonDisabled.value = !isFormValid;
};

const handleSaveButtonClick = () => {
  alert(JSON.stringify(changedUserData));

  editUser(newUserData);

  changedUserData = {};

  isSaveButtonDisabled.value = true;
};
</script>

<template>
  <tr class="row">
    <td colspan="6">
      <form class="form" @submit.prevent="handleSaveButtonClick" name="form" action="">
        <Details
          :user="user"
          :newUserData="newUserData"
          :changedUserData="changedUserData"
          @inputchange="onInputChange"
        ></Details>
        <button type="submit" :disabled="isSaveButtonDisabled" title="Сохранить изменения" class="form__submit">
          <CheckIcon :isDisabled="isSaveButtonDisabled" />
        </button>
      </form>
    </td>
  </tr>
</template>

<style scoped>
.row {
  background-color: white;
  position: relative;
}

.form {
  display: flex;
  align-items: flex-start;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 2.25rem;
  padding-right: 2.25rem;
  gap: 0.75rem;
}

.form__submit {
  background: transparent;
  border: none;
  cursor: pointer;
}
</style>
