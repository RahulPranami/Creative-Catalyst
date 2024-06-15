import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
                cormorant: [
                    "Cormorant Upright",
                    ...defaultTheme.fontFamily.serif,
                ],
            },
            colors: {
                black: {
                    DEFAULT: "#000000",
                    100: "#000000",
                    200: "#000000",
                    300: "#000000",
                    400: "#000000",
                    500: "#000000",
                    600: "#333333",
                    700: "#666666",
                    800: "#999999",
                    900: "#cccccc",
                },
                oxford_blue: {
                    DEFAULT: "#14213d",
                    100: "#04070c",
                    200: "#080d19",
                    300: "#0c1425",
                    400: "#101b31",
                    500: "#14213d",
                    600: "#29447e",
                    700: "#3e67bf",
                    800: "#7e99d5",
                    900: "#beccea",
                },
                orange: {
                    DEFAULT: "#fca311",
                    100: "#362101",
                    200: "#6b4201",
                    300: "#a16402",
                    400: "#d68502",
                    500: "#fca311",
                    600: "#fdb541",
                    700: "#fec871",
                    800: "#fedaa0",
                    900: "#ffedd0",
                },
                platinum: {
                    DEFAULT: "#e5e5e5",
                    100: "#2e2e2e",
                    200: "#5c5c5c",
                    300: "#8a8a8a",
                    400: "#b8b8b8",
                    500: "#e5e5e5",
                    600: "#ebebeb",
                    700: "#f0f0f0",
                    800: "#f5f5f5",
                    900: "#fafafa",
                },
                white: {
                    DEFAULT: "#ffffff",
                    100: "#333333",
                    200: "#666666",
                    300: "#999999",
                    400: "#cccccc",
                    500: "#ffffff",
                    600: "#ffffff",
                    700: "#ffffff",
                    800: "#ffffff",
                    900: "#ffffff",
                },
            },
        },
    },

    plugins: [forms],
};
