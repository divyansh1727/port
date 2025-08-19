// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F9FAFB",   // light gray background
        primary: "#1E293B",      // slate blue-gray
        accent: "#6366F1",       // soft indigo
        secondary: "#10B981",    // emerald green
        textDark: "#0F172A",     // dark slate for text
      },
    },
  },
  plugins: [],
}
