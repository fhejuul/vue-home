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
        <td class="border-b text-center py-3 text-xl">{{ line.Starttid.slice(0,5) }}</td>
        <td class="border-b px-6 py-3 text-xl">{{ line.Kursusnavn  }}</td>
        <td class="border-b text-center py-3 text-xl">{{ line.Lokale.slice(4) }}</td>
    </tr>
</template>

<style scoped>

</style>
