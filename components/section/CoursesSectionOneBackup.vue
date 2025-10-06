<template>
    <div class="course-section py-section">
        <div class="container">
            <div class="section-top lg:flex justify-between">
                <SectionTitleStyleOne title="Students are" highlight-title="Viewing" class="mb-8 lg:mb-12" />
                <ul class="flex flex-wrap space-x-2 sm:space-x-3 gap-y-2 mb-10 lg:mb-0">
                    <li v-for="(cat, i) in allCategories" :key="i">
                        <button class="text-sm px-5 py-2 rounded-[3px] capitalize font-semibold hover:text-primary hover:bg-white hover:shadow-[0_6px_25px_rgba(0,0,0,10%)]" :class="{'text-primary bg-white shadow-[0_6px_25px_rgba(0,0,0,10%)]': cat === selectedCategory}" @click="filterHandler(cat)">{{ cat }}</button>
                    </li>
                </ul>
            </div>
            <div class="grid grid-cols-12 xl:grid-cols-10 gap-7">
                <div v-for="(course, i) in filterData.slice(0, 10)" :key="i" class="col-span-12 sm:col-span-6 lg:col-span-3 xl:col-span-2">
                    <CourseGridStyle :course="course" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import courses from "~/data/courses.json";

    export default {
        components: {
            SectionTitleStyleOne: () => import("~/components/elements/SectionTitleStyleOne"),
            CourseGridStyle: () => import("~/components/courses/CourseGridStyle"),
        },

        data() {
            return {
                courses,
                filterData: [],
                selectedCategory: "all"
            }
        },

        computed: {
            allCategories() {
                return ["all", ...new Set(this.courses.map(el => el.categories).flat().filter(item => item === "featured" || item === "trending" || item === "popularity" || item === "art & design"))]
            }
        },

        mounted () {
            this.filterData.push(...this.courses)
        },

        methods: {
            filterHandler(cat) {
                this.selectedCategory = cat;
                if(this.selectedCategory === "all"){
                    this.filterData = this.courses
                } else {
                    const filterResult = this.courses.filter((item) => item.categories.includes(cat));
                    this.filterData = [];
                    this.filterData.push(...filterResult)
                }
            }  
        }, 
    };
</script>