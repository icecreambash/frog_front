<template>
  <div class="flex flex-col gap-[8px]">
    <span v-if="title">{{ title }}</span>
    <UInput :placeholder="placeholder" inputClass="temporary-input" size="xl" v-model="value" class="col-span-2" />
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{title?:string, placeholder?:string}>(),{})
const value = defineModel<string>('value')
</script>

<style>

</style>