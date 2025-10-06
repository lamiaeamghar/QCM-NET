export default {
    target: "static",

    // loading: "@/components/Loader.vue",
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "EduMall",
        titleTemplate: "EduMall - %s",
        htmlAttrs: {
            lang: "en",
        },
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            {
                hid: "description",
                name: "description",
                content: "EduMall blog template",
            },
            {
                name: "format-detection",
                content: "telephone=no",
            },
            {
                name: "keywords",
                content: "EduMall blog template",
            },
            {
                name: "app-mobile-web-app-title",
                content: "EduMall",
            },
            {
                name: "application-name",
                content: "EduMall blog template",
            },
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            { rel: "apple-touch-icon", type: "image/x-icon", href: "/favicon.ico" },
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
            },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["~/assets/scss/style.scss", "~/assets/css/tailwind.css", "~/assets/css/fontawesome.min.css", "~/assets/css/swiper.css", "~/assets/css/edumall-icon.css"],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        "~/plugins/vue-awesome-swiper.js",
        "~/plugins/vue-inline-svg.js",
        "~/plugins/popover.js",
        "~/plugins/vuejs-pagiante.js",
        "~/plugins/observe-visibility.js",
        "~/plugins/vue-select.js",
        "~/plugins/vue2-google-maps.js",
        { src: "~/plugins/datepicker.js", mode: "client" },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        "@nuxtjs/eslint-module",
        // https://go.nuxtjs.dev/tailwindcss
        "@nuxtjs/tailwindcss",
        "@nuxt/image",
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ["@nuxtjs/style-resources"],

    styleResources: {
        scss: ["~/assets/scss/style.scss"],
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        loaders: {
            vue: {
                compiler: require("vue-template-babel-compiler"),
            },
        },
        transpile: [/^vue2-google-maps($|\/)/],
    },

    router: {
        middleware: ["class"],
    },
};
