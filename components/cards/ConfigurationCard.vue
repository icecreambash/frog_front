<template>
  <PalletCard>
    <template #body>
      <div class="flex flex-col h-full gap-[16px]" v-if="controller?.currentProperty && controller.currentPlatform && controller.fields.length > 0">
        <span class="medium-text">Накрутка</span>
        <component v-for="(entity,key) in controller.fields" :is="findFieldComponent(entity.field_type)" v-model:context="controller.fields[key]" />
        <div class="border-t-[1px] border-white border-opacity-[20%] pt-[16px] grid  gap-[24px] grid-cols-4 max-lg:grid-cols-1 max-sm:grid-cols-1 max-xl:grid-cols-2 max-2xl:grid-cols-3">
          <InputText title="Ссылка" placeholder="Укажите ссылку" class="col-span-2 max-sm:col-span-1"/>
          <InputText title="Количество" placeholder="Минимум 100шт" class="col-span-1"/>
          <InputText title="Продолжительность" placeholder="Максимум 10 дней" class="col-span-1"/>
        </div>
        <div class="border-top-box flex justify-between  gap-[8px] max-lg:flex-col ">
          <div class="flex flex-col">
            <span class="medium-text">{{ 0 }} ₽</span>
            <span class="very-small-text opacity-[50%] font-normal">Итоговая стоимость</span>
          </div>
          <button @click="controller.visiblePayModal = true" class="very-small-text h-fit bg-[#23F0A2] rounded-[12px] text-black px-[16px] py-[12px]">
            К оплате
          </button>
        </div>
      </div>
      <div class="bg-[#FFFFFF] flex place-content-center place-items-center p-[16px] bg-opacity-5 rounded-[24px]"  v-else-if="controller?.currentProperty && controller.currentPlatform && !controller.loadingFields">
          <span class="small-text">В данный момент, данная услуга недоступна</span>
      </div>
      <div v-else class="flex flex-col gap-[8px]">
        <span class="medium-text">Параметры накрутки</span>
        <span class="small-text text-[#606866]">Выберите вид накрутки что бы определить параметры накрутки</span>
      </div>
    </template>
  </PalletCard>
</template>

<script lang="ts" setup>
import PalletCard from './PalletCard.vue';
import InputText from '../inputs/InputText.vue';


const controller = defineModel<PlatformController>('controller')
</script>

<style>

</style>