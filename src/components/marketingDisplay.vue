<script setup>
import { useMarketingStore } from '../stores/marketing'
import { storeToRefs } from 'pinia'

const marketingStore = useMarketingStore()
const { inlineDisplayUrl } = storeToRefs(marketingStore)

const props = defineProps({
  lokation: String,
})


</script>

<template>
  <div class="flex justify-center">
    <img :src="inlineDisplayUrl[props.lokation]" />
  </div>
</template > 
<style scoped>

</style>