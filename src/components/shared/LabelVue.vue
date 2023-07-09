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
type InputChangeParamsCompany = {
  block: "company";
  name: "name" | "catchPhrase" | "bs";
  value: string;
};
export type InputChangeParams = InputChangeParamsBasic | InputChangeParamsCompany | InputChangeParamsAddress;

const { block, name, value } = defineProps<InputChangeParams>();

const emit = defineEmits<{
  (e: "inputChange", params: InputChangeParams): void;
}>();

const handleInputChange = (e: Event) => {
  const input = e.target as HTMLInputElement;
  const params: InputChangeParams = { block, name, value: input.value } as InputChangeParams;

  emit("inputChange", params);
};
</script>

<template>
  <label class="inline-flex flex-col gap-2">
    <span class="text-xs opacity-50 capitalize">{{ name }}</span>
    <input
      :name="name"
      type="text"
      class="border rounded py-2 px-4 text-sm border-light-grey"
      :value="value"
      @change="handleInputChange"
    />
  </label>
</template>
