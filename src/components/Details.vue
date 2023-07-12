<script setup lang="ts">
import User from "../types/User";
import { BlockTitle, DetailsInput } from "./shared";
import { type InputChangeEventParams } from "./shared/DetailsInput.vue";

type Props = { user: User; newUserData: User; changedUserData: any };

const { user } = defineProps<Props>();
const emit = defineEmits<{
  (e: "inputchange", params: InputChangeEventParams): void;
}>();

const handleInputChange = (params: InputChangeEventParams) => {
  emit("inputchange", params);
};
</script>

<template>
  <div class="details">
    <div class="details__header">
      <div class="details__block">
        <BlockTitle title="address" />
        <div class="details__fieldset">
          <DetailsInput block="address" name="street" :value="user.address.street" @inputchange="handleInputChange" />
          <DetailsInput block="address" name="suite" :value="user.address.suite" @inputchange="handleInputChange" />
          <DetailsInput block="address" name="city" :value="user.address.city" @inputchange="handleInputChange" />
          <DetailsInput block="address" name="zipcode" :value="user.address.zipcode" @inputchange="handleInputChange" />
        </div>
      </div>
      <div class="details__block">
        <BlockTitle title="company" className="details__title" />
        <div class="details__fieldset details__fieldset_border-left">
          <DetailsInput block="company" name="name" :value="user.company.name" @inputchange="handleInputChange" />
          <DetailsInput
            block="company"
            name="catchPhrase"
            :value="user.company.catchPhrase"
            @inputchange="handleInputChange"
          />
          <DetailsInput block="company" name="bs" :value="user.company.bs" @inputchange="handleInputChange" />
        </div>
      </div>
      <div class="details__block">
        <BlockTitle title="basic info" className="details__title" />
        <div class="details__fieldset details__fieldset_border-left">
          <DetailsInput :block="null" name="name" :value="user.name" @inputchange="handleInputChange" />
          <DetailsInput :block="null" name="username" :value="user.username" @inputchange="handleInputChange" />
          <DetailsInput :block="null" name="email" :value="user.email" @inputchange="handleInputChange" />
          <DetailsInput :block="null" name="phone" :value="user.phone" @inputchange="handleInputChange" />
          <DetailsInput :block="null" name="website" :value="user.website" @inputchange="handleInputChange" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.details {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.details__header {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border: 1px solid var(--light-grey);
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}

.details__block {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
  align-items:normal;
}

.details__title {
  border-left-width: 1px;
  border-left-style: solid;
  border-left-color: var(--light-grey);
  overflow: hidden;
}

.details__body {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  overflow: hidden;
  border: 1px solid var(--light-grey);
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

.details__fieldset {
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: 0.75rem;
  border: none;
  border-top: 1px solid var(--light-grey);
  margin: 0;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  padding-left: 2rem;
  padding-right: 2rem;
  overflow: hidden;
  background-color: white;
}

.details__fieldset_border-left {
  border-left-width: 1px;
  border-left-style: solid;
  border-left-color: var(--light-grey);
}
</style>
