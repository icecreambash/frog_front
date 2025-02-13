<template>
  <PalletCard>
    <template #body>
      <div class="flex flex-col gap-[8px]">
        <Stepper :count="items.length" :currentIndex="props.currentIndex" />
        <template v-if="currentStatus">
          <span class="small-text text-[#23F0A2] ">{{ currentStatus.title }}</span>
          <span v-if="currentStatus.subtitle" class="medium-text">{{ currentStatus.subtitle }}</span>
        </template>
      </div>
    </template>
  </PalletCard>
</template>

<script lang="ts" setup>
import PalletCard from '~/components/cards/PalletCard.vue';
import Stepper from '~/components/Stepper.vue';

const props = withDefaults(defineProps<{items?:StatusOrderType[], currentIndex?: number}>(),{
  items:[],
  currentIndex: 1,
})

const currentStatus = computed<undefined|StatusOrderType>(()=>{
  if(!props.items) return undefined
  if(props.currentIndex - 1 > props.items.length) return undefined
  if(!props.items[props.currentIndex -1]) return undefined
  return props.items[props.currentIndex - 1]
})

</script>

<style>

</style>