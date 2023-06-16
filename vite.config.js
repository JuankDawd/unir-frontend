import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@pages': path.resolve(__dirname, 'src/Pages'),
			'@components': path.resolve(__dirname, 'src/Components'),
			'@utils': path.resolve(__dirname, 'src/Utils'),
			'@assets': path.resolve(__dirname, 'src/Utils/assets'),
			'@api': path.resolve(__dirname, 'src/Utils/API'),
			'@services': path.resolve(__dirname, 'src/Utils/services'),
			'@style': path.resolve(__dirname, 'src/Utils/Style'),
		},
	},
});
