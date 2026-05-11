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
                background: "#050509",
                surface: {
                    DEFAULT: "#0d0d16",
                    2: "#131322",
                    3: "#191932",
                },
                primary: {
                    DEFAULT: "#00dc82",
                    dim: "#00c16e",
                    glow: "rgba(0, 220, 130, 0.25)",
                },
                accent: {
                    DEFAULT: "#818cf8",
                    dim: "#6366f1",
                    glow: "rgba(129, 140, 248, 0.2)",
                },
                secondary: "#94a3b8",
                muted: "#4b5563",
            },
            animation: {
                'fade-in': 'fadeIn 0.7s ease-out forwards',
                'slide-up': 'slideUp 0.7s ease-out forwards',
                'float': 'float 7s ease-in-out infinite',
                'gradient-x': 'gradientX 5s ease infinite',
                'blob': 'blob 9s ease-in-out infinite',
                'blob-2': 'blob 9s ease-in-out 3s infinite',
                'blob-3': 'blob 9s ease-in-out 5s infinite',
                'ping-slow': 'ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite',
                'shimmer': 'shimmer 2.5s linear infinite',
                'border-spin': 'borderSpin 4s linear infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(28px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                    '50%': { transform: 'translateY(-18px) rotate(1deg)' },
                },
                gradientX: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(40px, -60px) scale(1.12)' },
                    '66%': { transform: 'translate(-25px, 30px) scale(0.92)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% center' },
                    '100%': { backgroundPosition: '200% center' },
                },
                borderSpin: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
