<template>
    <button class="text-sm px-5 py-2 rounded-[3px] capitalize font-semibold hover:text-primary hover:bg-white hover:shadow-[0_6px_25px_rgba(0,0,0,10%)]" :class="{'text-primary bg-white shadow-[0_6px_25px_rgba(0,0,0,10%)]': cat === selectedCategory}" @click="filterHandler(cat)">{{ cat }}</button>
</template>

<script>
    export default {
        props: {
            cat: {
                type: String,
                default: ''
            },
        },
    }
</script>