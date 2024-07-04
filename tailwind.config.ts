import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        colorBlackGreen: "#091212",
        colorBlackLightGreen: "#1d4443",
        colorBg: "#1E2020",
        colorBgGreen: "#0C1A1A",
        colorGreen: {
          '50': '#f2fbf9',
          '100': '#d4f3ed',
          '200': '#a9e6dd',
          '300': '#77d1c7',
          '400': '#44aaa2',
          '500': '#319b95',
          '600': '#257c79',
          '700': '#216462',
          '800': '#1f504f',
          '900': '#1d4443',
          '950': '#0c2627',
        },
        blueSubtitle: "#9ad2f6",
        greenTitles: "#6aebd1",
        blueSecondary: "#547D98",
        blueBackground: "#141515"
      }
    },
  },
  plugins: [],
}
export default config
