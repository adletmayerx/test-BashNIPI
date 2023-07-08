<script setup lang="ts">
type Props = {
  name: string;
  value: string;
};

defineProps<Props>();
</script>

<template>
  <label class="inline-flex flex-col gap-2">
    <span class="text-xs opacity-50 capitalize">{{ name }}</span>
    <input :name="name" type="text" class="border rounded py-2 px-4 text-sm border-light-grey" :value="value" />
  </label>
</template>
