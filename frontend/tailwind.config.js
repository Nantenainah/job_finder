/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'lightColor': '#fff',
                'darkColor': '#252525',
                'blueColor': '#0099ff',
                // 'textColor': 'hsl(0,2%,20%)',
            }
        },
    },
    plugins: [],
}