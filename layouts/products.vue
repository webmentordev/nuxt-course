<template>
    <nav>
        <NuxtLink to="/products">Nuxt Course Products</NuxtLink>
    </nav>
    <div>
        <slot />
    </div>
    <footer>
        <ul>
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