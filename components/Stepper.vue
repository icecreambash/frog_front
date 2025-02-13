<template>
  <div class="flex gap-2 relative">
    <div v-for="i in count" class="h-[3px] w-[100px] rounded-[24px] bg-gray-100 relative">
      <div class="absolute rounded-[24px] top-0 transition-all ease-in duration-300 left-0 h-[3px] bg-[#23F0A2]" :class="`${currentIndex >= i ? 'w-[100px]' : 'w-[0px]'}`">

      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{count:number, currentIndex:number}>(),{})


</script>

<style>

</style>