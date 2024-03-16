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
  <div>
    <div>
      <h1>Test af infoscreen</h1>
      <table>
        <thead>
          <InfoLine v-for="(line, index) in paginatedSlice" :line="line" :key="index"></InfoLine>
        </thead>
      </table>
      </div>
      <p v-if="showPages"> {{ currentPage }} / {{ totalPages }}</p>
  </div>
</template>

<style scoped>

.infinite-list-container {
    height: 100%;
    overflow: auto;
    position: relative;
    -webkit-overflow-scrolling: touch;
}
</style>