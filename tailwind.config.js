/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js}",
        "./node_modules/tw-elements/dist/js/**/*.js",
    ],
    theme: {
        extend: {
            colors: {
                "mycolor-primary": "#04d304",
                "mycolor-dark": "#025402",
                "mycolor-light": "#46DB46",
            },
            backgroundColor: {
                "mycolor-primary": "#04d304",
                "mycolor-dark": "#025402",
                "mycolor-light": "#46DB46",
            },
            backgroundImage: {
                "soccer-field": "url('../../src/assets/soccer-field.svg')",
            },
        },
    },
    plugins: [require("tw-elements/dist/plugin")],
};
