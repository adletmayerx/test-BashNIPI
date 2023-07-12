<script setup lang="ts">
import clsx from "clsx";

type Props = {
  title: string;
  className?: string;
};

defineProps<Props>();
</script>

<template>
  <h2 :class="clsx('heading', [className && className])">{{ title }}</h2>
</template>

<style scoped>
.heading {
  font-size: 16px;
  margin: 0;
  text-transform: uppercase;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #696966;
}
</style>
