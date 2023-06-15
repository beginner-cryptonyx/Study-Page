/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
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
                "fs_green": "#089246",
                "fs_green#1": "#0e7c3f",
                "fs_green#2": "#135e34",
                "fs_green#3": "#368c5d",

                "fs_pink": "#d845f2",
                "fs_pink#1": "#c227dd",
                "fs_cyan": "#70cdb4",
                "fs_cyan#1": "#7bb5c6",

                "fs_red":'#d81313',
                "fs_red#1":'#b71a1a',
                "fs_purple":'#2e0678',
                "fs_purple#1":'#6a43b1',

            },
        },
    },
    plugins: [],
};
