<script setup lang="ts">
import User from "../types/User";
import { BlockTitle, LabelVue } from "./shared";
import { type InputChangeParams } from "./shared/LabelVue.vue";

type Props = { user: User; newUserData: User; changedUserData: any };

const { user } = defineProps<Props>();
const emit = defineEmits<{
  (e: "inputchange", params: InputChangeParams): void;
}>();

const handleInputChange = ({ block, name, value }: InputChangeParams) => {
  const params: InputChangeParams = { block, name, value } as InputChangeParams;

  emit("inputchange", params);
};
</script>

<template>
  <div class="flex flex-col text-grey grow">
    <div class="grid grid-cols-3 border rounded-t">
      <BlockTitle title="address" />
      <BlockTitle title="company" className="border-l border-light-grey" />
      <BlockTitle title="basic info" className="border-l border-light-grey" />
    </div>
    <div class="grid grid-cols-3 border border-light-grey rounded-b overflow-hidden">
      <fieldset class="flex flex-col gap-3 py-5 px-8 overflow-hidden bg-white">
        <LabelVue block="address" name="street" :value="user.address.street" @inputchange="handleInputChange" />
        <LabelVue block="address" name="suite" :value="user.address.suite" @inputchange="handleInputChange" />
        <LabelVue block="address" name="city" :value="user.address.city" @inputchange="handleInputChange" />
        <LabelVue block="address" name="zipcode" :value="user.address.zipcode" @inputchange="handleInputChange" />
      </fieldset>
      <fieldset class="flex flex-col gap-3 py-5 px-8 border-l border-light-grey overflow-hidden bg-white">
        <LabelVue block="company" name="name" :value="user.company.name" @inputchange="handleInputChange" />
        <LabelVue
          block="company"
          name="catchPhrase"
          :value="user.company.catchPhrase"
          @inputchange="handleInputChange"
        />
        <LabelVue block="company" name="bs" :value="user.company.bs" @inputchange="handleInputChange" />
      </fieldset>
      <fieldset class="flex flex-col gap-3 py-5 px-8 border-l border-light-grey overflow-hidden bg-white">
        <LabelVue :block="null" name="name" :value="user.name" @inputchange="handleInputChange" />
        <LabelVue :block="null" name="username" :value="user.username" @inputchange="handleInputChange" />
        <LabelVue :block="null" name="email" :value="user.email" @inputchange="handleInputChange" />
        <LabelVue :block="null" name="phone" :value="user.phone" @inputchange="handleInputChange" />
        <LabelVue :block="null" name="website" :value="user.website" @inputchange="handleInputChange" />
      </fieldset>
    </div>
  </div>
</template>
