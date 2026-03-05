import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        sand: '#f6f1e8',
        clay: '#b88d6a',
        ink: '#23201d',
        pine: '#2f4c42',
        linen: '#fffdf9',
        muted: '#6d665f'
      },
      fontFamily: {
        serif: [
          'Iowan Old Style',
          'Palatino Linotype',
          'Palatino',
          'Book Antiqua',
          'serif'
        ],
        sans: ['Avenir Next', 'Segoe UI', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif']
      },
      boxShadow: {
        soft: '0 12px 32px rgba(35, 32, 29, 0.08)'
      },
      maxWidth: {
        content: '1200px'
      }
    }
  },
  plugins: []
};

export default config;
