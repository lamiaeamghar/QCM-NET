<template>
    <div class="main">
        <HeaderTopNotificationBar />
        <HeaderMain />
        <Nuxt />
        <FooterStyleOne />
    </div>
</template>

<script>
    export default {
        /* mounted() {
            this.$nextTick(() => {
                this.$nuxt.$loading.start()
                setTimeout(() => this.$nuxt.$loading.finish(), 1000)
            })
        } */
    };
</script>