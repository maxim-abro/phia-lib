import { fileURLToPath, URL } from "node:url";
import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
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
      // eslint-disable-next-line
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: function () {
        return "[name].js";
      },
    },
    rollupOptions: {
      external: ['vue'],
      output: {
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
