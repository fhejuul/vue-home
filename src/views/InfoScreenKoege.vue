<script setup>
import { ref, onMounted } from 'vue'
import infoList from '../components/infoList.vue';

const location = "koege"

</script>

<template>
  <h1>Infoscreen K!</h1>
  <infoList :location="location"></infoList>
</template>

<style scoped>

</style>