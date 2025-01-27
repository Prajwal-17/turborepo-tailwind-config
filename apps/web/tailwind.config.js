import tailwindConfig from '@repo/tailwind-config';

const config = {
  ...tailwindConfig,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", 
    ],
};

export default config;