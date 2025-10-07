/**
 * @format
 * @type {import('vite').UserConfig}
 */

import { defineConfig, loadEnv } from 'vite';

import { resolve } from 'path';

import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
// export default defineConfig({
//     plugins: [react()],
//     server: {
//         port: 3000,
//     },
//     define: {
//         __APP_ENV__: JSON.stringify(env.APP_ENV),
//     },
// });

export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), '');

    return {
        plugins: [react()],
        server: {
            port: 3000,
        },
        define: {
            __APP_ENV__: JSON.stringify(env.APP_ENV),
        },
        resolve: {
            alias: {
                '@fonts': resolve('./public/fonts/axiforma'),
            },
        },
    };
});
