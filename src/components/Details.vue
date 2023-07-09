<script setup lang="ts">
import { LabelVue, BlockTitle } from "./shared";
import User from "../types/User";
import { type InputChangeParams } from "./shared/LabelVue.vue";

type Props = { user: User; newUserData: any };

const { user, newUserData } = defineProps<Props>();

const onInputChange = ({ name, value, block }: InputChangeParams) => {
  switch (block) {
    case "address":
      if (!newUserData[block]) {
        newUserData[block] = {};
      }

      newUserData[block][name] = value;

      break;
    case "company":
      if (!newUserData[block]) {
        newUserData[block] = {};
      }

      newUserData[block][name] = value;

      break;
    default:
      newUserData[name] = value;

      break;
  }

  console.log(newUserData);
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
        <LabelVue block="address" name="street" :value="user.address.street" @inputChange="onInputChange" />
        <LabelVue block="address" name="suite" :value="user.address.suite" @inputChange="onInputChange" />
        <LabelVue block="address" name="city" :value="user.address.city" @inputChange="onInputChange" />
        <LabelVue block="address" name="zipcode" :value="user.address.zipcode" @inputChange="onInputChange" />
      </fieldset>
      <fieldset class="flex flex-col gap-3 py-5 px-8 border-x border-light-grey">
        <LabelVue block="company" name="name" :value="user.company.name" @inputChange="onInputChange" />
        <LabelVue block="company" name="catchPhrase" :value="user.company.catchPhrase" @inputChange="onInputChange" />
        <LabelVue block="company" name="bs" :value="user.company.bs" @inputChange="onInputChange" />
      </fieldset>
      <fieldset class="flex flex-col gap-3 py-5 px-8">
        <LabelVue :block="null" name="name" :value="user.name" @inputChange="onInputChange" />
        <LabelVue :block="null" name="username" :value="user.username" @inputChange="onInputChange" />
        <LabelVue :block="null" name="email" :value="user.email" @inputChange="onInputChange" />
        <LabelVue :block="null" name="phone" :value="user.phone" @inputChange="onInputChange" />
        <LabelVue :block="null" name="website" :value="user.website" @inputChange="onInputChange" />
      </fieldset>
    </div>
  </div>
</template>
