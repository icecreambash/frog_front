<template>
<PalletCard>
  <template #body>
    <div v-if="!currentPlatform" class="flex flex-col gap-[8px]">
      <span class="medium-text">
        Виды накрутки
      </span>
      <span class="small-text desc-text">
        Выберите площадку что бы определить вид накрутки
      </span>
    </div>
    <div v-else class="flex flex-col gap-[8px]">
      <span class="medium-text">
        Виды накрутки {{ currentPlatform.name }}
      </span>
      <div class="flex flex-wrap gap-[8px]">
        <button @click="currentService = property" v-for="property in properties">
          <Tag :title="property.name" :active="property.id === currentService?.id"/>
        </button>
      </div>
    </div>
  </template>
</PalletCard>
</template>

<script lang="ts" setup>
import PalletCard from './PalletCard.vue';
import Tag from '../Tag.vue';

const props = withDefaults(defineProps<{properties:PlatformService[], currentPlatform?:PlatformCard}>(),{})

const currentService = defineModel<PlatformService>('current-service')

</script>

<style>

</style>