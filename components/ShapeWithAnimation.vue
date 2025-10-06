<template>
    <div v-if="imgSrc" class="scene" :class='classList'>
        <span :data-depth="dataDepth">
            <img :src="imgSrc" alt="shape image" />
        </span>
    </div>
    <div v-else class="scene" :class='classList'>
        <span :data-depth="dataDepth" :class='shapeStyleClassList'></span>
    </div>
</template>

<script>
    import Parallax from 'parallax-js';
    
    export default {
        props: {
            classList: {
                type: String,
                default: ""
            },
            shapeStyleClassList: {
                type: String,
                default: ""
            },
            imgSrc: {
                type: String,
                default: ""
            },
            dataDepth: {
                type: String,
                default: ""
            }
        }, 

        mounted () {
            const scene = document.querySelectorAll('.scene');
            if(scene) {
                scene.forEach((el) => {
                    /* eslint-disable */
                    new Parallax(el);
                });
            };
        },
    };
</script>
