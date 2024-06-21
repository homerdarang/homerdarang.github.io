/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({addUtilities}) {
      const newUtilities = {
        '.scrollbox::-webkit-scrollbar-thumb:vertical': {
          'background-color': '#6e6e6e',
          '-webkit-border-radius': '8px',
        },
        '.scrollbox::-webkit-scrollbar': {
            'background-color': '#313131',
            'border-radius': '8px',
            'width': '10px',
        },
        
        'scrollbox': {
          '-ms-overflow-style': 'transparent',
          'scrollbar-width': '1px'
        }
      }
      addUtilities(newUtilities)
    }
  ],
}

