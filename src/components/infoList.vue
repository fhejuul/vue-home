<script setup>
import { ref, onMounted, onBeforeUnmount} from 'vue'
import { useSettingsStore } from '../stores/settings'
import { useCoursesStore } from '../stores/courses'
import InfoLine from '../components/InfoLine.vue'
import { storeToRefs } from 'pinia'

const props = defineProps({
  lokation: String,
})

const settingsStore = useSettingsStore()
const coursesStore = useCoursesStore()

const { dataFromApi } = storeToRefs(settingsStore)
const { paginatedSlice, paginationTime, dataRefreshInterval, currentPage, totalPages, showPages } = storeToRefs(coursesStore)
let timerPageTurn = null
let timerDataRefresh = null


function startTimerPageTurn(){
  timerPageTurn = setInterval(() => {
    if (showPages.value) {
      coursesStore.turnPage()
    }
  }, dataFromApi.value[props.lokation].paginationInterval)
}

function startTimerDataRefresh(){
  timerDataRefresh = setInterval(() => {
    coursesStore.getData()
  }, dataFromApi.value[props.lokation].dataRefreshInterval)
}


onMounted(() => {
  startTimerPageTurn()
  startTimerDataRefresh()
})

onBeforeUnmount(() => {
  clearInterval(timerPageTurn)
  clearInterval(timerDataRefresh)
})

</script>

<template>
  <div v-if="paginatedSlice.length > 0">
    <div>
      <table class="border-collapse border table-fixed w-full">
        <thead>
          <tr>
            <th class="border w-1/6 py-4 text-3xl">Start</th>
            <th class="border w-4/5 py-4 text-3xl">Kursus</th>
            <th class="border w-1/6 py-4 text-3xl">Lokale</th>
          </tr>
        </thead>
        <tbody>
          <InfoLine v-for="(line, index) in paginatedSlice" :line="line" :key="index"></InfoLine>
          <tr v-if="showPages">
            <td colspan="3" class="text-center py-2">Side {{ currentPage }} / {{ totalPages }}</td>
          </tr>
        </tbody>
      </table>
      </div>
  </div>
</template>

<style scoped>

</style>