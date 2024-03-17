<script setup>
    import { useCurrentTime } from '../assets/composables/useCurrentTime';

    const { currentTime } = useCurrentTime();

</script>
<template>
    <div>
        <h1 class="text-center text-5xl py-16">{{ currentTime }}</h1>
    </div>
</template>
