<script setup>
import { ref, onMounted, onBeforeUnmount} from 'vue'
import { useSettingsStore } from '../stores/settings'
import { useCoursesStore } from '../stores/courses'
import CourseService from '../services/CourseService'
import InfoLine from '../components/InfoLine.vue'
import { storeToRefs } from 'pinia'

defineProps({
  location: {
    type: String,
    required: true,
  },
})

const store = useSettingsStore()
const coursesStore = useCoursesStore()

const { filteredCourses, paginatedSlice } = storeToRefs(coursesStore)
let timerPageTurn = null
let timerDataRefresh = null
const dataRefreshInterval = 120000 // Paas in as prop
const paginationInterval = 10000 // Paas in as prop
const linesPerPage = 4 // Paas in as prop
const courses = ref(null)
const displayData = ref([])
const start = ref(0)
const end = ref(0)
const currentPage = ref(0)
const lastPage = ref(0)

function startTimerPageTurn(){
  timerPageTurn = setInterval(() => {
    turnPage()
  }, paginationInterval)
}


function setPageNumber() {
  currentPage.value = Math.ceil((end.value+1)/linesPerPage)
  lastPage.value = Math.ceil(courses.value.length/linesPerPage)
}

// Checks if pagination is needed and loads data into displayData
function turnPage(){
  console.log('Turnpage called')
  try {
    if(paginatedSlice.value.length > linesPerPage){
      setPageNumber()
      end.value += Math.min((filteredCourses.value.length-start.value), linesPerPage)
          displayData.value = filteredCourses.value.slice(start.value, end.value)
  
      if(start.value < (end.value-(linesPerPage-1))){
          start.value += 10
      } else {
          start.value = 0
          end.value = 0
      }
      } else {
          displayData.value = filteredCourses.value
          console.log(displayData.value)
          console.log(filteredCourses.value)
      } 
  } catch (error) {
    console.log(error)
      start.value = 0
      end.value = 0
  }
}

onMounted(() => {
  turnPage()
})

onBeforeUnmount(() => {
  clearInterval(timerPageTurn)
  clearInterval(timerDataRefresh)
})

</script>

<template>
  <h1>Test af infoscreen</h1>
        <div>
          <div>
            <table>
              <thead>
                <InfoLine v-for="line in paginatedSlice" :line="line"></InfoLine>
              </thead>
            </table>
            </div>
            <p v-if="paginatedSlice.length > linesPerPage">{{ currentPage }} / {{ lastPage }}</p>
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