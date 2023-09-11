import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import macrosPlugin from 'vite-plugin-babel-macros';

import packageJson from './package.json';
// https://vitejs.dev/config/

export default defineConfig(() => ({
  plugins: [react(), macrosPlugin()],
  define: {
    'process.env': {}
  },
  build: {
    minify: false,
    lib: {
      entry: resolve('src', 'index.ts'),
      name: 'Mountain UI React components',
      fileName: (_format, name) => `${name}.js`
    },
    rollupOptions: {
      output: [
        {
          dir: 'dist/esm',
          format: 'esm',
          preserveModules: true,
          preserveModulesRoot: 'src'
        },
        {
          dir: 'dist/cjs',
          format: 'cjs',
          preserveModules: true,
          preserveModulesRoot: 'src'
        }
      ],
      external: [...Object.keys(packageJson.peerDependencies)]
    }
  }
}));
