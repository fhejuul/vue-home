<script setup>
import { ref, onMounted } from 'vue'
import { useSettingsStore } from '../stores/settings'
import { useCoursesStore } from '../stores/courses'
import infoList from '../components/infoList.vue'
import marketingDisplay from '../components/marketingDisplay.vue'
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
  <h1>Infoscreen Keep!</h1>
  <div v-if="initialized">
    <infoList :location="location"></infoList>
  </div>
  <img src="../assets/images/koege.jpg" />
  <div v-if="marketingToggle">
    <marketingDisplay></marketingDisplay>
  </div>
</template>

<style scoped>

</style>