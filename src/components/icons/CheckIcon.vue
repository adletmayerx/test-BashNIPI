<script lang="ts" setup>
type Props = {
  isDisabled: boolean;
};

defineProps<Props>();
</script>

<template>
  <svg
    :style="{ width: 42 + 'px', height: 42 + 'px' }"
    viewBox="0 0 42 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      width="41.6923"
      height="40"
      rx="4"
      transform="matrix(-1 0 0 1 41.6924 0)"
      :class="isDisabled ? 'fill-light-grey' : 'fill-gold'"
    />
    <path
      d="M12.5078 20.4894L19.7633 28.0293C20.2284 28.5126 21.0281 28.41 21.3561 27.8249L30.227 12"
      class="stroke-grey"
      stroke-width="3"
      stroke-linecap="round"
    />
  </svg>
</template>

<style scoped>
  .fill-light-grey {
    fill: var(--light-grey);
  }
  
  .fill-gold {
    fill: var(--gold);
  }
 
  .stroke-grey {
    stroke: var(--grey);
  }
</style>
