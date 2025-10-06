<template>
    <n-link :to="link" class="text-base px-9 py-3.5 font-semibold inline-block rounded" :class="variationClass">{{ label }}</n-link>
</template>

<script>
    export default {
        props: {
            label: {
                type: String,
                default: "Read More"
            },
            link: {
                type: String,
                default: "/"
            },
            variationClass: {
                type: String,
                default: "text-white bg-primary hover:text-heading hover:bg-secondary"
            }
        },
    }
</script>