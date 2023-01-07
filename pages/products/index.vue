<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="product in products" :key="product.id">
                <ProductCard :product="product" />
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
            layout: 'products'
    });

    //Fetch Products
    const { data: products } = await useFetch("https://fakestoreapi.com/products")

    useHead({
        title: "NustJS 3.0 Course | Merch",
        meta: [
            { name: "description", content: "NuxtJS 3.0 Seller Merch" }
        ]
    })


</script>

<style>
    h2{
        margin-bottom: 20px;
        font-size: 36px;
    }
    p{
        margin: 20px 0px;
    }
</style>