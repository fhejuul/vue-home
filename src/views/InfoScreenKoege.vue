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
const { locations, dataFromApi, marketingToggle } = storeToRefs(store)
const { initialized } = storeToRefs(storeCourses)

const location = locations.value.KOEGE
const currentTime = ref(new Date())


let timerDataRefresh = null

onMounted(() => {
  currentTime.value = new Date()
  storeCourses.setLocation(location)
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
  }, dataFromApi.value[location].dataRefreshInterval)
}

function refreshData() {
  storeCourses.getData()
}

</script>

<template>
  <Header></Header>
  <div v-if="initialized" class="grid grid-cols-2">
    <div>  
      <DigitalClock></DigitalClock>
      <infoList :location="location"></infoList>
    </div>
    <div class="container px-4 py-6">
      <img src="../assets/images/koege.jpg" />
    </div>
  </div>
  <div v-if="marketingToggle">
    <marketingDisplay></marketingDisplay>
  </div>
</template>

<style scoped>

</style>