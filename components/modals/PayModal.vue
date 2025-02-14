<template>
  <UModal v-model="visible" :fullscreen="fullMode">
    <UCard :ui="{
          base: 'h-full flex flex-col',
          rounded: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
          body: {
            base: 'grow'
          }
        }">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
              Оплата <span v-if="selectedBank">{{ selectedBank }}</span>
            </h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="visible = false" />
          </div>
        </template>
        <div class="flex flex-col gap-[8px]">
          <button @click="selectedBank = bank" :class="`${selectedBank === bank ? 'border-black':'border-white'}`" class="bg-[#FFFFFF] text-start border-[1px] border-white border-opacity-[10%] bg-opacity-5 rounded-[16px] py-[18px] px-[20px]" v-for="bank in banks">
            {{ bank }}
          </button>
        </div>
        <template #footer>
          <div class="flex justify-between place-items-center">
            <div>
              К оплате 0₽
            </div>
           <UButton :disabled="!selectedBank">
              Оплатить
           </UButton>
          </div>
        </template>
    </UCard>
  </UModal>
</template>

<script lang="ts" setup>

const visible = defineModel<boolean>('visible')

const fullMode = ref<boolean>(false)

onMounted(()=>{
  if(window.outerWidth <= 600) {
    fullMode.value = true
  }
})

const banks = ref<string[]>(["Сбербанк","USDT"])
const selectedBank = ref<string|undefined>(undefined)

</script>

<style>

</style>