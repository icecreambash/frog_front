<template>
  <PalletCard>
    <template #body>
      <div class="flex flex-col gap-[16px]">
        <span class="big-text">Платформы продвижения</span>
        <div v-if="controller" class="flex flex-wrap gap-[8px]">
          <PlatformCard v-model:current-platform="controller.currentPlatform" :platform="platform" v-for="platform in controller?.platforms" />
          <USkeleton class="rounded-[24px] w-[147px] h-[88px]" v-if="controller.loading && controller.platforms.length === 0" v-for="o in 8" />
        </div>
      </div>
    </template>
  </PalletCard>
</template>

<script lang="ts" setup>
import PalletCard from './PalletCard.vue';
import PlatformCard from './PlatformCard.vue';
const controller = defineModel<PlatformController>('controller'); onMounted(()=>{})

</script>

<style>

</style>