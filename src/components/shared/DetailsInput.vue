<script setup lang="ts">
type InputChangeParamsBasic = {
  block: null;
  name: "name" | "username" | "email" | "phone" | "website";
  value: string;
};
type InputChangeParamsAddress = {
  block: "address";
  name: "street" | "suite" | "city" | "zipcode";
  value: string;
};
export type InputChangeParamsCompany = {
  block: "company";
  name: "name" | "catchPhrase" | "bs";
  value: string;
};
export type InputChangeParams = InputChangeParamsBasic | InputChangeParamsCompany | InputChangeParamsAddress;

const { block, name, value, inputType = "text" } = defineProps<InputChangeParams & {inputType?: 'text' | "number" | "email" | "url"}>();

const emit = defineEmits<{
  (e: "inputchange", params: InputChangeParams): void;
}>();

const handleInputChange = (e: Event) => {
  const input = e.target as HTMLInputElement;
  const params: InputChangeParams = { block, name, value: input.value } as InputChangeParams;

  emit("inputchange", params);
};
</script>

<template>
  <label class="label">
    <span class="label__text">{{ name }}</span>
    <input :name="name" :type="inputType" class="label__input" :value="value" @input="handleInputChange" minlength="2" maxlength="32"  />
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
</style>
