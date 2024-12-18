// tailwind.config.js
export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", // Include all app files
    "./public/**/*.html", // Include public HTML files
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#60a5fa", // blue-400
          DEFAULT: "#3b82f6", // blue-500
          dark: "#2563eb", // blue-600
        },
        secondary: {
          light: "#f87171", // red-400
          DEFAULT: "#ef4444", // red-500
          dark: "#dc2626", // red-600
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      // Add custom spacing, border-radius, etc., as needed
    },
  },
  plugins: [],
};
