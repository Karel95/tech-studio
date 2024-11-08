import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx', // Para habilitar JSX en archivos `.js`
    include: /src\/.*\.js$/, // Indica que solo cargue los archivos en `/src` como JSX
  },
  optimizeDeps: {
    exclude: ['NOMBRE_DE_LAS_DEPENDENCIAS_PROBLEMATICAS'], // Añade aquí las dependencias que no son compatibles
  },
});
