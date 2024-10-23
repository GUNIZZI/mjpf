import react from '@vitejs/plugin-react';
import { defineConfig, UserConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';
import svgr from 'vite-plugin-svgr';

export default defineConfig(async ({ mode }): Promise<UserConfig> => {
    const isProduction = mode === 'production';

    return {
        base: '/mjpf',
        plugins: [
            react(),
            mkcert(),
            svgr({
                svgrOptions: {
                    icon: true,
                    // svgr 옵션
                },
                include: '**/*.svg',
            }),
        ],
        optimizeDeps: {
            // include: ['highlight.js'],
        },
        resolve: {
            alias: [{ find: '@/', replacement: '/src/' }],
        },
        css: {
            modules: {
                localsConvention: 'camelCaseOnly',
            },
        },
        build: {
            outDir: '@dist/prod',
            minify: isProduction,
            sourcemap: !isProduction,
            target: 'esnext',
        },
        server: {
            host: 'mjpf.devel.com',
            open: true,
            port: 9998,
            headers: {
                'Cross-Origin-Embedder-Policy': 'unsafe-none',
            },
        },
    };
});
