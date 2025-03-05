import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Ensure Tailwind scans your files
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            fontSize: {
                62: "62px",
                50: "50px",
                40: "40px",
                30: "30px",
                20: "20px",
            },
            fontWeight: {
                100: "100",
                200: "200",
                300: "300",
                400: "400",
            },
        },
    },
    plugins: [react(), tailwindcss()],
});
