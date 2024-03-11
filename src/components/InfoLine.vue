<script setup>
defineProps({
  line: {
    type: Object,
    required: true,
  },
})
</script>

<template>
    <tr>
        <td>{{ line.Starttid }}</td>
        <td>{{ line.Kursusnavn  }}</td>
        <td>{{ line.Lokale }}</td>
    </tr>
</template>

<style scoped>
    
</style>
