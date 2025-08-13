import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	base: '/clinica-seu-sorriso',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
});
