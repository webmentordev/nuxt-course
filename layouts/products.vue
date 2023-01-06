<template>
    <header class="shadow-sm bg-white">
        <nav class="conatiner mx-auto p-4">
            <NuxtLink to="/products">Nuxt Course Products</NuxtLink>
        </nav>
    </header>
    <div class="conatiner mx-auto p-4">
        <slot />
    </div>
    <footer class="conatiner mx-auto p-4 flex justify-between border-t-2">
        <ul class="flex gap-4">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/products">Products</NuxtLink></li>
            <li><NuxtLink to="/products/1">Products 1</NuxtLink></li>
            <li><NuxtLink to="/products/2">Products 2</NuxtLink></li>
        </ul>
    </footer>
</template>

<style scoped>
    .router-link-exact-active{
        color: #12b488;
    }
</style>