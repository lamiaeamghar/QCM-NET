<template>
    <div class="testimonial-section pt-section pb-[104px]">
        <div class="container">
            <div class="grid grid-cols-12 lg:gap-10">
                <div class="col-span-12 lg:col-span-3">
                    <SectionTitleStyleOne class="mb-10" title="People Say About" highlight-title="QCM-NET" sub-title="One-stop solution for any eLearning center, online courses. People love QCM-NET because they can create their sites with ease here." />

                    <ButtonDefault label="View all" link="/" variation-class="bg-[#f5f5f5] text-primary hover:bg-primary hover:text-white" />
                </div>
                <div class="col-span-12 lg:col-span-9">
                    <div class="relative mt-12 lg:mt-0">
                        <swiper :options="swiperOptions">
                            <div v-for="(testimonial, i) in testimonialData" :key="i" class="swiper-slide">
                                <TestimonialItem :testimonial="testimonial" />
                            </div>
                        </swiper>
                        <div class="swiper-pagination swiper-pagination-center"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import testimonialData from "~/data/testimonial.json";

    export default {
        components: {
            SectionTitleStyleOne: () => import("~/components/elements/SectionTitleStyleOne"),
            ButtonDefault: () => import("~/components/elements/ButtonDefault"),
            TestimonialItem: () => import("~/components/testimonial/TestimonialItem"),
        },
        
        data() {
            return {
                testimonialData,

                swiperOptions: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    speed: 1000,
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                    },
                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        }
                    }
                }
            }
        }
    }
</script>