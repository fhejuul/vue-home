<script setup>
import { ref, onMounted, onBeforeUnmount} from 'vue'
import InfoService from '../services/InfoService'
import InfoLine from '../components/InfoLine.vue'

let timer = null
const paginationInterval = 100000 // Make dynamic or env variable
const linesToShow = 10 // Make dynamic or env variable
const courses = ref(null)
const listData = ref([])
const start = ref(0)
const end = ref(0)
const currentPage = ref(0)
const lastPage = ref(0)

function startTimer(){
  timer = setInterval(() => {
    turnPage()
  }, paginationInterval)
}

function setPageNumber() {
  currentPage.value = Math.ceil((end.value+1)/linesToShow)
  lastPage.value = Math.ceil(courses.value.length/linesToShow)
}

function turnPage(){
  if(courses && courses.value.length > linesToShow){
    setPageNumber()
    end.value += Math.min((courses.value.length-start.value), linesToShow)
    try {
      listData.value = courses.value.slice(start.value, end.value)
    } catch (error) {
      console.log(error)
      start.value = 0
      end.value = 0
    }
  
    if(start.value < (end.value-(linesToShow-1))){
      start.value += 10
    } else {
      start.value = 0
      end.value = 0
    }
  }
}


onMounted(() => {
  InfoService.getLocation()
    .then((response) => {
      courses.value = response.data
      start.value = 0
      turnPage()
      startTimer()
    })
    .catch((error) => {
      console.log(error)
    })
})

onBeforeUnmount(() => {
  clearInterval(timer)
})

</script>

<template>
  <h1>Test af infoscreen</h1>
        <div v-if="courses">
          <div>
            <table>
              <thead>
                <InfoLine v-for="line in listData" :line="line"></InfoLine>
              </thead>
            </table>
            </div>
            <p>{{ currentPage }} / {{ lastPage }}</p>
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