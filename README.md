# To add tailwind to packages

1.  Initialize a turborepo project using `npx create-turbo@latest`

2.  Add a tailwind.config folder in packages folder.

3.  Add a package.json and update its name to `@repo/tailwind-config` and the main to `tailwind.config.js`

    - Where main represents the main entry of the file eg: index.js

4.  Install `tailwindcss autoprefixer postcss` and run `pnpm exec tailwindcss init -p`

    - update the tailwind config according the apps

    ```
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

5.  Then run this cmd  
    **when running from the root folder** =>

          pnpm install @repo/tailwind-config@ --filter=web

    **when running from the apps/web folder** =>

            pnpm add @repo/tailwind-config --workspace

    `@workspace:*` to use the local version of package available in the workspace(root) and from npm  
     `--filter-web` flag to install the package in a particular app

6.  Then add `pnpm add tailwindcss postcss autoprefixer -D
`  
     Update the tailwind.config and postcss and global.css

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

7.  Then `pnpm run dev` if doesnt work then remove pnpm-lock.yaml file and `pnpm install`
