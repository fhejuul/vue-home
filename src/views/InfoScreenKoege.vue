<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useSettingsStore } from '../stores/settings'
import { useCoursesStore } from '../stores/courses'
import infoList from '../components/infoList.vue'
import marketingDisplay from '../components/marketingDisplay.vue'
import DigitalClock from '../components/DigitalClock.vue'
import Header from '../components/Header.vue'
import { storeToRefs } from 'pinia'

const store = useSettingsStore()
const storeCourses = useCoursesStore()
const { lokationer, dataFromApi } = storeToRefs(store)
const { initialized, lokation } = storeToRefs(storeCourses)

const masterLokation = lokationer.value.KOEGE
const currentTime = ref(new Date())


let timerDataRefresh = null

onMounted(() => {
  currentTime.value = new Date()
  storeCourses.setLokation(masterLokation)
  //store.getData() Todo: wait for backend
  storeCourses.getData()
  startTimerDataRefresh()
})

onBeforeUnmount(() => {
  clearInterval(timerDataRefresh)
})


function startTimerDataRefresh(){
  timerDataRefresh = setInterval(() => {
    refreshData()
  }, dataFromApi.value[masterLokation].dataRefreshInterval)
}

function refreshData() {
  storeCourses.getData()
}

</script>

<template>
  <Header></Header>
  <div v-if="initialized" class="grid grid-cols-2">
    <div class="pl-14 pr-8">  
      <DigitalClock></DigitalClock>
      <infoList :lokation="masterLokation"></infoList>
      <div v-if="dataFromApi.global.showInlineMarketing">
        <marketingDisplay :lokation="masterLokation" class="py-14"></marketingDisplay>
      </div>
    </div>
    <div class="container pl-8 pr-14 py-14">
      <img src="../assets/images/roskildeAdmin.svg" />
    </div>
  </div>
</template>

<style scoped>

</style>