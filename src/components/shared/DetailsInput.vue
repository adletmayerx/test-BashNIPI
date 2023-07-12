<script setup lang="ts">
import { ref } from "vue";

type InputPropsBasic = {
  block: null;
  name: "name" | "username" | "email" | "phone" | "website";
  value: string;
};
type InputPropsAddress = {
  block: "address";
  name: "street" | "suite" | "city" | "zipcode";
  value: string;
};
type InputPropsCompany = {
  block: "company";
  name: "name" | "catchPhrase" | "bs";
  value: string;
};
type Props = (InputPropsBasic | InputPropsCompany | InputPropsAddress) & {
  inputType?: "text" | "number" | "email" | "url";
};

export type InputChangeEventParams = (InputPropsBasic | InputPropsCompany | InputPropsAddress) & { isValid: boolean };

const { block, name, value, inputType = "text" } = defineProps<Props>();
const error = ref("");
const inputValue = ref(value);

const emit = defineEmits<{
  (e: "inputchange", params: InputChangeEventParams): void;
}>();

const handleInputChange = (e: Event) => {
  const input = e.target as HTMLInputElement;
  const params: InputChangeEventParams = {
    block,
    name,
    value: inputValue.value,
    isValid: input.validity.valid,
  } as InputChangeEventParams;

  error.value = input.validationMessage ?? "";

  emit("inputchange", params);
};
</script>

<template>
  <label class="label">
    <span class="label__text">{{ name }}</span>
    <input
      :name="name"
      :placeholder="name"
      :type="inputType"
      class="label__input"
      v-model="inputValue"
      @input="handleInputChange"
      minlength="2"
      maxlength="32"
      required
    />
    <span v-if="error" class="label__error">{{ error }}</span>
  </label>
</template>

<style scoped>
@import url(../../assets/styles/variables.css);
.label {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: flex-start;
  width: 100%;
  position: relative;
}

.label__text {
  font-size: 0.75rem;
  line-height: 1rem;
  opacity: 0.5;
  text-transform: capitalize;
}

.label__input {
  border: 1px solid #d9dbda;
  color: var(--grey);
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-radius: 0.25rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.label__input:invalid {
  border-color: red;
}

.label__error {
  position: absolute;
  top: 70px;
  z-index: 2;
  left: 0;
  border-radius: 4px;
  color: red;
  background-color: lightgrey;
  opacity: 1;
  padding: 0.5rem;
  font-size: 12px;
}
</style>
