import path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

	build: {
		lib: {
			entry: path.resolve(__dirname, 'src', 'overlapping-markup.tsx'),
			name: 'overlapping-markup',
			formats: ['es', 'umd', 'cjs'],
			fileName: (format) => `overlapping-markup.${format}.js`,
		},
		rollupOptions: {
			external: [ 'react' ],
			output: {
				globals: {
					'react': 'React',
					'react-dom': 'ReactDom',
				},
			}
		},
	},
});
