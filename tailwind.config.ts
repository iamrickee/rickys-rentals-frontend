import type { Config } from "tailwindcss";
import { PluginCreator } from 'tailwindcss/types/config';

const hocusPlugin: PluginCreator = ({ addVariant }) => addVariant('hocus', ['&:hover', '&:focus']);

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    fontFamily: {
      sans: ['"Lato"', 'sans-serif'],
      serif: ['"Arvo"', 'serif'],
      logo: ['"Black Ops One"', 'sans-serif'],
    },
  },
  plugins: [
    hocusPlugin
  ],
};
export default config;
