/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
        fontFmaily: {
            abc: ['Nunito', 'Poppins', 'PT Sans']
        }
    },
    plugins: [
        require('tailwind-scrollbar-hide')
    ],
}