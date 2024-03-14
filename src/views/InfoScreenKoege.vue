<script setup>
import { ref, onMounted } from 'vue'
import { useSettingsStore } from '../stores/settings'
import { useCoursesStore } from '../stores/courses'
import infoList from '../components/infoList.vue'
import { storeToRefs } from 'pinia'

const store = useSettingsStore()
const storeCourses = useCoursesStore()
const { locations, dataFromApi } = storeToRefs(store)
const { initialized } = storeToRefs(storeCourses)

const location = locations.value.KOEGE
const currentTime = ref(new Date())

let timerDataRefresh = null

onMounted(() => {
  console.log('InfoScreenKoege onmounted')
  currentTime.value = new Date()
  storeCourses.setLocation('koege')
  storeCourses.getData()
  store.getData()
  startTimerDataRefresh()
  //storeCourses.setPaginatedSlice()
  storeCourses.setInitialized(true)
  console.log(initialized)
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
</template>

<style scoped>

</style>