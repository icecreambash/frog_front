<template>
  <button @click="currentPlatform = platform"
          :class="`${currentPlatform === undefined || currentPlatform.id !== platform.id ? 'bg-[#FFFFFF]':'bg-[#23F0A233]'}`"
          class="w-[147px] h-[88px] transition-all ease-in duration-250  bg-opacity-5 rounded-[16px] border-[1px] border-white border-opacity-[2%] flex place-content-center place-items-center">
    <component v-if="platform" 
               :is="GetPlatformIconComponent(platform.slug)"
               :class="`${currentPlatform === undefined || currentPlatform.id !== platform.id ? 'fill-[#FFFFFF] opacity-50' : 'fill-[#23F0A2]'}`"
               class="w-[50px] h-[50px] transition-all ease-in duration-250" />
  </button>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{platform:PlatformCard}>(),{})

const currentPlatform = defineModel<PlatformCard>('current-platform')

</script>

<style>

</style>