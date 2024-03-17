<script setup>
import { useMarketingStore } from '../stores/marketing'
import { storeToRefs } from 'pinia'

const store = useMarketingStore()
const { inlineDisplayUrl } = storeToRefs(store)

</script>

<template>
  <div class="flex justify-center">
    <img :src="inlineDisplayUrl" />
  </div>
</template > 
<style scoped>

</style>