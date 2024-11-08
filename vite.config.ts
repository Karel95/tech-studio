import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['NOMBRE_DE_LAS_DEPENDENCIAS_PROBLEMATICAS'], // Add problematic dependencies here if needed
  },
});
