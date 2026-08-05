/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // 暖色调，贴合家庭分享主题
        brand: {
          50: '#fdf6f0',
          100: '#faead9',
          200: '#f4d0ad',
          300: '#edb079',
          400: '#e58a4f',
          500: '#dc6f30',
          600: '#cc5725',
          700: '#a94121',
          800: '#863721',
          900: '#6c301d',
        },
        ink: {
          50: '#f7f7f6',
          100: '#e3e3e0',
          200: '#c7c7c2',
          300: '#a3a29c',
          400: '#7d7c75',
          500: '#63625c',
          600: '#4d4c47',
          700: '#3f3e3a',
          800: '#363531',
          900: '#1f1f1c',
        },
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'PingFang SC',
          'Hiragino Sans GB',
          'Microsoft YaHei',
          'sans-serif',
        ],
      },
      container: {
        center: true,
        padding: '1.25rem',
        screens: {
          '2xl': '1152px',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '70ch',
          },
        },
      },
    },
  },
  plugins: [],
};
