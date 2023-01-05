<template>
    <div>
        <p>Product Details for {{ id }}</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, accusamus!</p>
    </div>
</template>

<script setup>
    const { id } = useRoute().params
</script>

<style lang="scss" scoped>

</style>