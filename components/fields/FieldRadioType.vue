<template>
  <div class="flex flex-wrap max-lg:gap-[8px] place-items-center justify-between border-t-[1px] border-white border-opacity-[20%] pt-[16px]">
    <span class="font-normal">{{context?.field_name}}</span>
    <div class="flex flex-wrap gap-[8px]">
      <button @click="()=>{
        context.currentValue = option.value
      }" v-for="option in context?.options">
          <Tag :title="option.key" :active="context?.currentValue === option.value" />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Tag from '../Tag.vue';
const context = defineModel<FieldEntity>('context')

onMounted(()=>{
  if(context.value?.default_value) {
    context.value.currentValue = context.value.options.find(v=>v.value == context.value.default_value)?.value
  }
})

</script>

<style>

</style>