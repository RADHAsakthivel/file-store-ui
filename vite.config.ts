import { defineConfig } from "vite";
import alias from '@rollup/plugin-alias';
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    alias({
      entries: [
        { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
        { find: '@dto', replacement: path.resolve(__dirname, 'src/dto') },
        { find: '@enums', replacement: path.resolve(__dirname, 'src/enums') },
        { find: '@interfaces', replacement: path.resolve(__dirname, 'src/interfaces') },
        { find: '@stateManagement', replacement: path.resolve(__dirname, 'src/stateManagement') },
        { find: '@CustomHooks', replacement: path.resolve(__dirname, 'src/CustomHooks') },
      ],
    }),
  ],
});