<script setup lang="ts">
import DownArrowIcon from "./icons/DownArrowIcon.vue";
import DetailsBlock from "./DetailsBlock.vue";

type Props = {
  name: string;
  email: string;
  phone: string;
  website: string;
};

defineProps<Props>();
</script>

<template>
  <div class="border rounded border-yellow p-3 flex">
    <button type="button">
      <DownArrowIcon />
    </button>
    <ul class="flex justify-between text-grey text-sm grow ml-5 gap-8">
      <li>
        <p>{{ name }}</p>
      </li>
      <li>
        <p>{{ email }}</p>
      </li>
      <li>
        <p>{{ phone }}</p>
      </li>
      <li>
        <p>{{ website }}</p>
      </li>
    </ul>
    <div class="grow shrink"></div>
  </div>
  <DetailsBlock>
    <fieldset>
      <label>
        <span>{{name}}</span>
        <input type="text" :value="name" />
      </label>
    </fieldset>
  </DetailsBlock>
</template>
