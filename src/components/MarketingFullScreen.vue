<script setup>
import { useMarketingStore } from '../stores/marketing'
import { storeToRefs } from 'pinia'

const marketingStore = useMarketingStore()
const { fullPageUrl } = storeToRefs(marketingStore)

const props = defineProps({
  lokation: String,
})


</script>

<template>
  <div class="flex justify-center pt-16">
    <img :src="fullPageUrl[props.lokation]" />
  </div>
</template > 
<style scoped>

</style>