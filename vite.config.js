import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allows connections from other devices
    port: 5173,      // Optional: specify the port (default is 5173)
  },
});
