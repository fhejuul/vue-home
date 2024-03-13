<script setup>
import { ref, onMounted } from 'vue'
import infoList from '../components/infoList.vue'
import ParamsService from '../services/ParamsService'

const location = "koege"
const currentTime = ref(new Date())
const paramsTest = ref([]) // Make a default object to pass in with values from constants

onMounted(() => {
  currentTime.value = new Date()
  console.log("OnMounted ICK")
  ParamsService.getParams()
    .then((response) => {
      console.log(response.data)
      paramsTest.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})

</script>

<template>
  <h1>Infoscreen Keep!</h1>
  <p>{{ currentTime }}</p>
  <infoList :location="location" :paramsTest="paramsTest"></infoList>
</template>

<style scoped>

</style>