import { fileURLToPath, URL } from "node:url";
import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    cssInjectedByJsPlugin({ useStrictCSP: true, relativeCSSInjection: false }),
    dts({
      include: [
        'src/index.ts',
        'src/components'
      ],
      exclude: ['node_modules'],
      outDir: 'dist',
      compilerOptions: {
        sourceMap: true
      },
      copyDtsFiles: true
    })
  ],
  esbuild: {
    drop: ['debugger'],
    pure: ['console.log']
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    lib: {
      name: 'phia-ui',
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: () => {
        return `[name].js`;
      },
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue'
        }
      }
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
