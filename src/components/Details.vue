<script setup lang="ts">
import { LabelVue, BlockTitle } from "./shared";
import User from "../types/User";
import { type InputChangeParams } from "./shared/LabelVue.vue";

type Props = { user: User; newUserData: User; changedUserData: any };

const { user, newUserData, changedUserData } = defineProps<Props>();
const emit = defineEmits<{
  (e: "inputchange"): void;
}>();

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

  emit("inputchange");
};
</script>

<template>
  <div class="flex flex-col text-grey grow">
    <div class="grid grid-cols-3 border rounded-t">
      <BlockTitle title="address" />
      <BlockTitle title="company" className="border-x border-light-grey" />
      <BlockTitle title="basic info" />
    </div>
    <div class="grid grid-cols-3 border border-light-grey rounded-b">
      <fieldset class="flex flex-col gap-3 py-5 px-8">
        <LabelVue block="address" name="street" :value="user.address.street" @inputchange="onInputChange" />
        <LabelVue block="address" name="suite" :value="user.address.suite" @inputchange="onInputChange" />
        <LabelVue block="address" name="city" :value="user.address.city" @inputchange="onInputChange" />
        <LabelVue block="address" name="zipcode" :value="user.address.zipcode" @inputchange="onInputChange" />
      </fieldset>
      <fieldset class="flex flex-col gap-3 py-5 px-8 border-x border-light-grey">
        <LabelVue block="company" name="name" :value="user.company.name" @inputchange="onInputChange" />
        <LabelVue block="company" name="catchPhrase" :value="user.company.catchPhrase" @inputchange="onInputChange" />
        <LabelVue block="company" name="bs" :value="user.company.bs" @inputchange="onInputChange" />
      </fieldset>
      <fieldset class="flex flex-col gap-3 py-5 px-8">
        <LabelVue :block="null" name="name" :value="user.name" @inputchange="onInputChange" />
        <LabelVue :block="null" name="username" :value="user.username" @inputchange="onInputChange" />
        <LabelVue :block="null" name="email" :value="user.email" @inputchange="onInputChange" />
        <LabelVue :block="null" name="phone" :value="user.phone" @inputchange="onInputChange" />
        <LabelVue :block="null" name="website" :value="user.website" @inputchange="onInputChange" />
      </fieldset>
    </div>
  </div>
</template>
