<script setup lang="ts">
type Props = {
  name: string;
  value: string;
};

defineProps<Props>();

const emit = defineEmits<{
  (e: 'inputChange', name: string, value: string): void
}>()

const handleInputChange = (e: Event) => {
  const input = e.target as HTMLInputElement;

  emit('inputChange', input.name.toLowerCase(), input.value);
}
</script>

<template>
  <label class="inline-flex flex-col gap-2">
    <span class="text-xs opacity-50 capitalize">{{ name }}</span>
    <input :name="name" type="text" class="border rounded py-2 px-4 text-sm border-light-grey" :value="value"
      @change="handleInputChange" />
  </label>
</template>
