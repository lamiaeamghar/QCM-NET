<template>
    <div class="feature-section bg-primary py-5">
        <div class="container">
            <div class="grid grid-cols-12 sm:gap-8 gap-y-8">
                <div v-for="feature in features" :key="feature.id" class="col-span-12 sm:col-span-6 lg:col-span-3">
                    <div class="sm:flex items-center sm:max-w-[230px] text-center sm:text-left">
                        <div class="inline-block">
                            <inline-svg :src="feature.icon"></inline-svg>
                        </div>
                        <div class="sm:pl-5 mt-2.5 sm:mt-0">
                            <h6 class="leading-[1.8] text-white">{{ feature.title }}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                features: [
                    {
                        id: 1,
                        icon: "/images/svg/essential-skill.svg",
                        title: "Learn The Essential Skills"
                    },
                    {
                        id: 2,
                        icon: "/images/svg/certificates.svg",
                        title: "Earn Certificates And Degrees"
                    },
                    {
                        id: 3,
                        icon: "/images/svg/career.svg",
                        title: "Get Ready for The Next Career"
                    },
                    {
                        id: 4,
                        icon: "/images/svg/master.svg",
                        title: "Master at Different Areas"
                    }
                ]
            }
        }
    }
</script>