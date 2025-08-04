import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.VITE_TWITTER_BEARER_TOKEN': JSON.stringify(process.env.VITE_TWITTER_BEARER_TOKEN),
    'import.meta.env.VITE_TELEGRAM_BOT_TOKEN': JSON.stringify(process.env.VITE_TELEGRAM_BOT_TOKEN),
    'import.meta.env.VITE_TELEGRAM_CHAT_ID': JSON.stringify(process.env.VITE_TELEGRAM_CHAT_ID),
    'import.meta.env.VITE_SOLANA_TOKEN_ADDRESS': JSON.stringify(process.env.VITE_SOLANA_TOKEN_ADDRESS),
    'import.meta.env.VITE_SOLANA_RPC_URL': JSON.stringify(process.env.VITE_SOLANA_RPC_URL),
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
