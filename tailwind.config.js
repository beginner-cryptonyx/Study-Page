/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                'background':'#1d1b1c',
                'text':'#fbf4f8',
                'primary':'#9ec671',
                'secondary':'#000000',

                // Accents
                'accent#1':'#719ec6',
                'accent#1.5': '#51799a',
                'accent#2':'#61aeab',
                'accent#3':'#74b672',

                // Important bg-colors

              }
        },
    },
    plugins: [],
};
