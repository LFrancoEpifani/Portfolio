/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    // Add other paths here if you have more file types or different paths
  ],
  theme: {
    extend: {
      spacing: (() => {
        let spacing = {};
        for (let i = 0; i <= 1000; i++) {
          spacing[i] = `${i}px`;
        }
        return spacing;
      })(),
    },
  },
  screens: {
      'sm': '340px',
      // => @media (min-width: 640px) { ... }

      'md': '610px',
      // => @media (min-width: 768px) { ... }

      'lg': '768px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1024px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1280px',
      // => @media (min-width: 1536px) { ... }
    },
  plugins: [],
}

