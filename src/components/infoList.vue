<script setup>
import { ref, onMounted, onBeforeUnmount} from 'vue'
import { useCoursesStore } from '../stores/courses'
import InfoLine from '../components/InfoLine.vue'
import { storeToRefs } from 'pinia'

defineProps({
  location: {
    type: String,
    required: true,
  },
})

const coursesStore = useCoursesStore()

const { paginatedSlice, paginationTime, dataRefreshInterval, currentPage, totalPages, showPages } = storeToRefs(coursesStore)
let timerPageTurn = null
let timerDataRefresh = null


function startTimerPageTurn(){
  timerPageTurn = setInterval(() => {
    if (showPages.value) {
      coursesStore.turnPage()
    }
  }, paginationTime.value)
}

function startTimerDataRefresh(){
  timerDataRefresh = setInterval(() => {
    coursesStore.getData()
  }, dataRefreshInterval.value)
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
    <div class="px-4">
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
            <td colspan="3" class="text-center">Side {{ currentPage }} / {{ totalPages }}</td>
          </tr>
        </tbody>
      </table>
      </div>
  </div>
</template>

<style scoped>

</style>