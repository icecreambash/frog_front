<template>
  <div class="bg-[#FFFFFF] p-[8px] w-full bg-opacity-5 rounded-[24px] h-fit">
    <div class="p-[24px] rounded-[16px] bg-[#070B09] max-lg:p-[16px]">
        <slot name="body" v-if="$slots.body" />
        <div v-else>
          <span>Card is empty</span>
        </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>