/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-background': '#1A202C',
        'dark-card': '#2D3748',
        'dark-text': '#E2E8F0',
        'dark-accent': '#63B3ED',
        'light-background': '#FFFFFF',
        'light-card': '#F7FAFC',
        'light-text': '#2D3748',
        'light-accent': '#63B3ED'
      }
    }
  },
  plugins: []
};