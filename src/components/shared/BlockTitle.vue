<script setup lang="ts">
import clsx from "clsx";

type Props = {
  title: string;
  className?: string;
};

defineProps<Props>();
</script>

<template>
  <h2 :class="clsx('uppercase px-8 py-2', [className && className])">{{ title }}</h2>
</template>
