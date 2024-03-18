<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useSettingsStore } from '../stores/settings'
import { useCoursesStore } from '../stores/courses'
import infoList from '../components/infoList.vue'
import MarketingFullScreen from '../components/MarketingFullScreen.vue'
import DigitalClock from '../components/DigitalClock.vue'
import Header from '../components/Header.vue'
import Logo from '../components/Logo.vue'
import { storeToRefs } from 'pinia'

const store = useSettingsStore()
const storeCourses = useCoursesStore()
const { lokationer, dataFromApi } = storeToRefs(store)
const { initialized, lokation } = storeToRefs(storeCourses)

const masterLokation = lokationer.value.KOEGE
const currentTime = ref(new Date())
const timerTest = ref(true)


let timerDataRefresh = null
let timerMarketing = null

onMounted(() => {
  currentTime.value = new Date()
  storeCourses.setLokation(masterLokation)
  //store.getData() Todo: wait for backend
  storeCourses.getData()
  startTimerDataRefresh()
  startMarketingToggle()
})

onBeforeUnmount(() => {
  clearInterval(timerDataRefresh)
})


function startTimerDataRefresh(){
  timerDataRefresh = setInterval(() => {
    refreshData()
  }, dataFromApi.value[masterLokation].dataRefreshInterval)
}

function startMarketingDuration(){
  timerMarketing = setTimeout(() => {
    toggleMarketing()
  }, 10000)
}

function startMarketingToggle() {
  timerMarketing = setTimeout(() => {
    toggleMarketing()
  }, 25000000)
}

function refreshData() {
  storeCourses.getData()
}

function toggleMarketing() {
  if(timerTest.value){
    // Shows marketing
    timerTest.value = false
    startMarketingDuration()
  } else {
    // Shows infoscreen
    timerTest.value = true
    startMarketingToggle()
  }
}

</script>

<template>
  <div v-if="timerTest">
    <logo class="absolute right-7"></logo>
    <div v-if="initialized" class="grid grid-cols-2">
      <div class="pl-4 pr-2">  
        <!-- <DigitalClock></DigitalClock> -->
        <infoList :lokation="masterLokation"></infoList>
      </div>
      <div class="container pl-2">
        <img src="../assets/images/roskildeAdmin.svg" />
      </div>
    </div>
</div>
<div v-else>
  <MarketingFullScreen :lokation="masterLokation"></MarketingFullScreen>
</div>
</template>

<style scoped>

</style>