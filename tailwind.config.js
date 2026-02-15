/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#faf7f4',
          100: '#f5ede3',
          200: '#e8d5c4',
          300: '#d9ba9f',
          400: '#c89b75',
          500: '#b67f56',
          600: '#a0653f',
          700: '#7d4e31',
          800: '#5c3722',
          900: '#3d2415',
          950: '#0f0804',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdfaf5',
          200: '#fbf4e8',
          300: '#f7ead3',
          400: '#f0dab3',
          500: '#e5c68d',
          600: '#d4a86d',
          700: '#c89b75',
          800: '#a0653f',
          900: '#6b4423',
          950: '#3d2817',
        },
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'fade-in': 'fadeIn 1.5s ease-out forwards',
        'slide-up': 'slideUp 1.2s ease-out forwards',
        'particle': 'particle 10s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5', filter: 'brightness(1)' },
          '50%': { opacity: '1', filter: 'brightness(1.3)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        particle: {
          '0%': { transform: 'translateY(0) translateX(0) scale(1)', opacity: '1' },
          '100%': { transform: 'translateY(-100vh) translateX(50px) scale(0)', opacity: '0' },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(182, 127, 86, 0.5)',
        'glow-lg': '0 0 40px rgba(182, 127, 86, 0.7)',
        'inner-glow': 'inset 0 0 20px rgba(182, 127, 86, 0.3)',
      },
    },
  },
  plugins: [],
}
