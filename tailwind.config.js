/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                sans: ['Outfit', 'Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            colors: {
                background: "#0a0a0a",
                surface: "#121212",
                primary: {
                    DEFAULT: "#00dc82",
                    dim: "#00c16e",
                    glow: "#00dc82aa",
                    // Keeping old keys for backward compatibility if needed, but redefining them to fit theme if possible, or just ignore
                    green: "#00dc82",
                    blue: "#0072bc",
                },
                secondary: "#94a3b8",
                accent: "#38bdf8",
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'slide-up': 'slideUp 0.5s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
