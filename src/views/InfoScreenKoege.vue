<script setup>
import { ref, onMounted } from 'vue'
import infoList from '../components/infoList.vue';

const location = "koege"
const currentTime = ref(new Date())

onMounted(() => {
  currentTime.value = new Date()
})

</script>

<template>
  <h1>Infoscreen K!</h1>
  <p>{{ currentTime }}</p>
  <infoList :location="location"></infoList>
</template>

<style scoped>

</style>