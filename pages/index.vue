<template>
  <Title>
    {{ orderStatus[currentIndex - 1] !== undefined ? orderStatus[currentIndex - 1]?.subtitle : 'TG UP' }}
  </Title>
  <div class="flex flex-row gap-[16px] h-full w-full max-lg:flex-col">
     <div class="basis-[20%] flex flex-col h-full gap-[16px]">
        <StatusCard :items="orderStatus" :currentIndex="currentIndex" />
        <ServicePropertiesCard  
        v-model:current-service="platformController.currentProperty"
        :currentPlatform="platformController.currentPlatform"
        :properties="platformController.properties"/>
     </div>
     <div class="basis-[80%] grow flex flex-col h-full gap-[16px]">
        <PlatformsSelectCard v-model:controller="platformController" />
        <ConfigurationCard v-model:controller="platformController" />
     </div>
  </div>
</template>

<script lang="ts" setup>
import StatusCard from '~/components/cards/StatusCard.vue';
import ServicePropertiesCard from '~/components/cards/ServicePropertiesCard.vue';
import PlatformsSelectCard from '~/components/cards/PlatformsSelectCard.vue';
import ConfigurationCard from '~/components/cards/ConfigurationCard.vue';
const orderStatus = ref<StatusOrderType[]>(
  [
    {
      title: 'Оформление заказа',
      subtitle: 'Выберите платформу',
    },
    {
      title: 'Оформление заказа',
      subtitle: 'Выберите вид накрутки'
    },
    {
      title: 'Оформление заказа',
      subtitle: 'Конфигурация услуги',
    }
  ]
)
const currentIndex = ref<number>(1)

const platformController = ref<PlatformController>({
  platforms:[],
  currentPlatform:undefined,
  loading:true,
  loading_properties:false,
  properties:[],
  currentProperty:undefined,
  fields:[],
}); onMounted(async ()=>{
  await loadPlatforms()
}); watch(()=>[platformController.value.currentPlatform],()=>{
  if(platformController.value.currentPlatform === undefined) return 
  currentIndex.value = 2;
}); watch(()=>[platformController.value.currentPlatform],()=>{
  if(platformController.value.currentPlatform === undefined) return 
  loadPlatformServices()
}); watch(()=>[platformController.value.currentProperty],()=>{
  if(platformController.value.currentProperty === undefined) return 
  currentIndex.value = 3;
  loadFields()
})

const loadPlatforms = async () => {
  platformController.value.loading = true
  try {
    platformController.value.platforms = ((await useConductor('/platforms/',{})).data) as PlatformCard[]
    platformController.value.loading = false
  }catch(e) {
    console.log(e)
    platformController.value.loading = false
  }
}

const loadPlatformServices = async () => {
  platformController.value.loading_properties = true 
  try {
    platformController.value.properties = ((await useConductor(`/platforms/${platformController.value.currentPlatform?.id}/services/`, {})).data) as PlatformService[]
    platformController.value.loading_properties = false
  }catch(e) {
      console.log(e)
      platformController.value.loading_properties = false
  }
}

const loadFields = async () => {
  try {
    platformController.value.fields = (await useConductor(`/platforms/${platformController.value.currentPlatform?.id}/services/${platformController.value.currentProperty?.id}/fields/`, {})).data as FieldEntity[]
  }catch(e) {
    console.log(e)
  }
}




</script>

<style>

</style>