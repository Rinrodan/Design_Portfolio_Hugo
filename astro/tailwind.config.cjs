/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', 
		'./node_modules/flowbite/**/*.js'],
	theme: {
		extend: {
			screens: {
				'3xl': '2500px'
			}
			
		},
	},
	variants: {
		extend: {
			display: ["group-hover"],
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
