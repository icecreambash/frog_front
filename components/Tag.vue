<template>
  <div :class="`${!active?'bg-[#FFFFFF] text-[#FFFFFF]':'bg-[#23F0A233]'}`" class="px-[16px] flex place-content-center place-items-center very-small-text w-fit h-fit py-[10px] rounded-[38px] border-[1px] border-white border-opacity-[5%] bg-opacity-5 transition-all ease-in duration-250">
      <span class="font-normal">{{ title }}</span>
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{title:string,active:boolean}>(),{})
</script>

<style>

</style>