<script setup>
import { ref, onMounted } from 'vue'
import InfoService from '../services/InfoService'
import InfoLine from '../components/InfoLine.vue'



const courses = ref(null)

onMounted(() => {
  InfoService.getLocation()
    .then((response) => {
      courses.value = response.data
      console.log(courses.value)
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <h1>Test af infoscreen</h1>
  <InfoLine v-for="line in courses" :line="line"></InfoLine>
  <!-- <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div> -->
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>