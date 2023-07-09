<script setup lang="ts">
import { LabelVue, BlockTitle } from "./shared";
import User from "../types/User";

type Props = { user: User };

defineProps<Props>();

</script>

<template>
  <div class="flex flex-col text-grey grow">
    <div class="grid grid-cols-3 border rounded-t">
      <BlockTitle title="address" />
      <BlockTitle title="company" className="border-x border-light-grey" />
      <BlockTitle title="basic info" />
    </div>
    <div class="grid grid-cols-3 border border-light-grey rounded-b">
      <fieldset class="flex flex-col gap-3 py-5 px-8">
        <LabelVue name="Street" :value="user.address.street" @inputChange="(name, value) => console.log(name, value)" />
        <LabelVue name="Suite" :value="user.address.suite" />
        <LabelVue name="City" :value="user.address.city" />
        <LabelVue name="Zipcode" :value="user.address.zipcode" />
      </fieldset>
      <fieldset class="flex flex-col gap-3 py-5 px-8 border-x border-light-grey">
        <LabelVue name="Name" :value="user.company.name" />
        <LabelVue name="CatchPhrase" :value="user.company.catchPhrase" />
        <LabelVue name="Bs" :value="user.company.bs" />
      </fieldset>
      <fieldset class="flex flex-col gap-3 py-5 px-8">
        <LabelVue name="Name" :value="user.name" />
        <LabelVue name="Username" :value="user.username" />
        <LabelVue name="Email" :value="user.email" />
        <LabelVue name="Phone" :value="user.phone" />
        <LabelVue name="Website" :value="user.website" />
      </fieldset>
    </div>
  </div>
</template>
