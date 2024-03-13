<script setup>
import { ref, onMounted } from 'vue'
import { useSettingsStore } from '../stores/settings';
import infoList from '../components/infoList.vue'
import ParamsService from '../services/ParamsService'
import { storeToRefs } from 'pinia';

const store = useSettingsStore()

const { courseTimeout } = storeToRefs(store)
const location = "koege"
const currentTime = ref(new Date())
//const paramsTest = ref([]) // Make a default object to pass in with values from constants


onMounted(() => {
  currentTime.value = new Date()
  console.log("OnMounted ICK")
  console.log(courseTimeout.value + 'Maybe')
  //console.log(courseTimeout)
  // ParamsService.getParams()
  //   .then((response) => {
  //     console.log(response.data)
  //     paramsTest.value = response.data
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })
})

</script>

<template>
  <h1>Infoscreen Keep!</h1>
  <p>{{ currentTime }}</p>
  <infoList :location="location"></infoList>
  <p>{{ courseTimeout }} test</p>
</template>

<style scoped>

</style>../components/InfoList.vue