<script setup>
import { ref, onMounted, onBeforeUnmount} from 'vue'
import InfoService from '../services/InfoService'
import InfoLine from '../components/InfoLine.vue'

defineProps({
  location: {
    type: String,
    required: true,
  },
})
const filteredCourses = []
const showPastStart = 19600000 //Paas in as prop
let timerPageTurn = null
let timerDataRefresh = null
const dataRefreshInterval = 120000 // Paas in as prop
const paginationInterval = 10000 // Paas in as prop
const linesToShow = 10 // Paas in as prop
const courses = ref(null)
const displayData = ref([])
const start = ref(0)
const end = ref(0)
const currentPage = ref(0)
const lastPage = ref(0)

function startTimerPageTurn(){
  // Initiate turnpage first time timer is started
  turnPage()
  timerPageTurn = setInterval(() => {
    turnPage()
  }, paginationInterval)
}

function startTimerDataRefresh(){
  // Initiate first data refresh
  refreshData()
  timerDataRefresh = setInterval(() => {
    refreshData()
  }, dataRefreshInterval)
}

// Fetch data from API
function refreshData(){
  console.log('RefreshingData')
  InfoService.getLocation(location)
    .then((response) => {
      filterByTime(response.data)
      courses.value = filteredCourses.slice()
      console.log(courses.value)
      if(!timerPageTurn){
        startTimerPageTurn()
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

function setPageNumber() {
  currentPage.value = Math.ceil((end.value+1)/linesToShow)
  lastPage.value = Math.ceil(courses.value.length/linesToShow)
}

// Checks if pagination is needed and loads data into displayData
function turnPage(){
  try {
    if(courses && courses.value.length > linesToShow){
      setPageNumber()
      end.value += Math.min((courses.value.length-start.value), linesToShow)
          displayData.value = courses.value.slice(start.value, end.value)
  
      if(start.value < (end.value-(linesToShow-1))){
          start.value += 10
      } else {
          start.value = 0
          end.value = 0
      }
      } else {
          displayData.value = courses.value
      } 
  } catch (error) {
    console.log(error)
      start.value = 0
      end.value = 0
  }
}

function filterByTime(data){
  let timestampNow = Date.now()
  let day = null
  let month = null
  let year = null 
  let timestampCourse = null

  // Length = 0 clears all data 
  filteredCourses.length = 0
  // Format date and time into ISO, then convert to timestamp and compare to current timestamp. Filters courses to display
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    day = element.Dato.substring(0,2)
    month = element.Dato.substring(3,5)
    year = element.Dato.substring(6)
    timestampCourse = Date.parse(year + '-' + month + '-' + day + ' ' + element.Starttid)
    if((timestampNow - timestampCourse) < showPastStart) {
      filteredCourses.push(element)
    }
  }
  console.log(filteredCourses)
}

onMounted(() => {
  startTimerDataRefresh()

})

onBeforeUnmount(() => {
  clearInterval(timerPageTurn)
  clearInterval(timerDataRefresh)
})

</script>

<template>
  <h1>Test af infoscreen</h1>
        <div v-if="courses">
          <div>
            <table>
              <thead>
                <InfoLine v-for="line in displayData" :line="line"></InfoLine>
              </thead>
            </table>
            </div>
            <p v-if="courses.length > linesToShow">{{ currentPage }} / {{ lastPage }}</p>
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