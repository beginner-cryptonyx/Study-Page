/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            animation: {
                text_down: "text_gradient_down 5s ease infinite",
                text_side: "text_gradient_side 5s ease infinite",
                gradient_slide: "text_gradient_side 5s ease infinite",
                gradient_slide_left: 'gradient_slide_left 3s ease infinite',
                gradient_slide_right: 'gradient_slide_right 1.6s ease-in infinite'
            },
            keyframes: {
                gradient_slide_right:{
                    "0%": {
                        "background-position": "0px"
                    },
                    "20%": {
                        "background-position": "-110px"
                    },
                    "35%": {
                        "background-position": "-180px"
                    },
                    "50%": {
                        "background-position": "-210px"
                    },
                    "80%": {
                        "background-position": "-350px"
                    },
                    "100%":  {
                        "background-position": "-390px"
                    }
                },
                gradient_slide_left: {
                    "0%, 100%": {
                        "background-size": "200% 200%",
                        "background-position": "left",
                    },
                    "50%": {
                        "background-size": "200% 200%",
                        "background-position": "right",
                    },
                },
                text_gradient_down: {
                    "0%, 100%": {
                        "background-size": "200% 200%",
                        "background-position": "top center",
                    },
                    "50%": {
                        "background-size": "200% 200%",
                        "background-position": "bottom center",
                    },
                },

                text_gradient_side: {
                    "0%, 100%": {
                        "background-size": "200% 200%",
                        "background-position": "left center",
                    },
                    "50%": {
                        "background-size": "200% 200%",
                        "background-position": "right center",
                    },
                },
                gradient_slide: {
                    "0%, 100%": {
                        "background-size": "200% 200%",
                        "background-position": "top left",
                    },
                    "50%": {
                        "background-size": "200% 200%",
                        "background-position": "bottom left",
                    },
                },
                // gradient_slide_left: {
                //     "0%": {
                //         "background-position": "0% 50%",
                //     },
                //     "50%": {
                //         "background-position": "100% 50%",
                //     },
                //     "100%": {
                //         "background-position": "0% 50%",
                //     },
                // },
            },
            colors: {
                background: "#1d1b1c",
                text: "#fbf4f8",
                primary: "#9ec671",
                secondary: "#000000",

                // Accents
                "accent#1": "#719ec6",
                "accent#1.5": "#51799a",
                "accent#2": "#61aeab",
                "accent#3": "#74b672",

                // Important bg-colors
                fs_green: "#089246",
                "fs_green#1": "#0e7c3f",
                "fs_green#2": "#135e34",
                "fs_green#3": "#368c5d",

                fs_pink: "#d845f2",
                "fs_pink#1": "#c227dd",
                fs_cyan: "#70cdb4",
                "fs_cyan#1": "#7bb5c6",

                fs_red: "#d81313",
                "fs_red#1": "#b71a1a",
                fs_purple: "#2e0678",
                "fs_purple#1": "#6a43b1",
            },
        },
    },
    plugins: [],
};
