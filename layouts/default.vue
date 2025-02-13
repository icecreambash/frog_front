<template>
  <div class="min-h-screen min-w-screen scene flex bg-repeat-round">
    <div class="2xl:px-[160px] px-[8px] xl:px-[140px] lg:px-[80px] md:px-[40px] sm:px-[20px] w-screen flex flex-col">
      <div class="py-[50px] max-lg:py-[20px] flex max-lg:place-content-center">
        <Logo class="w-[124px] h-[24px]"/>
      </div>
      <div class="flex grow h-full">
          <slot/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Logo from '~/assets/icons/full_logo.svg'

</script>

<style scoped>

.scene {
  background-image: url(@/assets/backgrounds/main_scene.png);
}

</style>