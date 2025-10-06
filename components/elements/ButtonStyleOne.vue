<template>
    <n-link :to="link" class="text-base text-white px-4 py-2 font-semibold bg-primary rounded inline-block hover:text-heading hover:bg-secondary">{{ label }}</n-link>
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
            }
        },
    }
</script>