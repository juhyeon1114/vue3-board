import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // unplugin-vue-commponents : 자동 임포트 library, components.d.ts에 필요한 선언들을 자동적으로 생성
    Components({
      dirs: ['src/components/app'],
      dts: true,
    }),
  ],
  // mode: 'production',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
