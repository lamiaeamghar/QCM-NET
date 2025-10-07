/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#0164A8",
                },
                secondary: {
                    DEFAULT: "#D71920",
                },
                heading: {
                    DEFAULT: "#252525",
                },
                body: "#333333",
                light: "#666666",
                white: {
                    DEFAULT: "#FFFFFF",
                    200: "#f2f2f2",
                    300: "#f3f3f3",
                    400: "#f4f4f4",
                    500: "#f5f5f5",
                    600: "#f6f6f6",
                    700: "#f7f7f7",
                    800: "#f8f8f8",
                },
                mercury: {
                    DEFAULT: "#e1e1e1",
                },
                gallery: {
                    DEFAULT: "#eeeeee",
                },
                tangaroa: {
                    DEFAULT: "#031f42",
                },
            },
            borderRadius: {
                DEFAULT: "5px",
            },
            boxShadow: {
                xs: "4px 4px 8px",
            },
            filter: {
                DEFAULT: "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.12))",
            },
            spacing: {
                7.5: "1.875rem",
                13: "3.25rem",
                15: "3.75rem",
            },
            content: {
                titleShape: 'url("/images/others/headline-curve.svg")',
            },
            keyframes: {
                waves: {
                    "0%": {
                        transform: "scale(0)",
                    },
                    "100%": {
                        opacity: "0",
                        transform: "scale(1.0)",
                    },
                },

                fadeInDown: {
                    from: {
                        opacity: "0",
                        transform: "translate3d(0, -100%, 0)",
                    },

                    to: {
                        opacity: "1",
                        transform: "none",
                    },
                },
            },
            animation: {
                spinner: "waves 1.0s infinite ease-in-out",
                fadeInDown: "fadeInDown .7s ease-in-out 0s 1 normal none running",
            },
        },

        fontSize: {
            base: "15px",
            normal: "16px",
            xs: "13px",
            sm: "0.875rem",
            lg: "1.125rem",
            xl: "1.25rem",
            "2xl": "1.5rem",
            "3xl": "1.875rem",
            "4xl": "2.25rem",
            "6xl": [
                "3.75rem",
                {
                    lineHeight: "1.2",
                },
            ],
        },
        fontFamily: {
            base: ["'Montserrat', sans-serif"],
            fontAwesome: [`"Font Awesome 5 Free"`],
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "15px",
            },
        },
        gridColumnEnd: {
            "-1": "-1",
        },
        screens: {
            xs: "480px",
            sm: "640px",
            md: "768px",
            lg: "1200px",
            xl: "1440px",
        },
    },
    plugins: [
        function ({ addVariant }) {
            addVariant("children", "& > *");
        },
        require("@tailwindcss/line-clamp"),
    ],
};
