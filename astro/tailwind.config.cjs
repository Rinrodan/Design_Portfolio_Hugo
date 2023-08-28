/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		
		screens: {
			'sm': '350px',
			// => @media (min-width: 640px) { ... }
	  
			'md': '640px',
			// => @media (min-width: 768px) { ... }
	  
			'lg': '1024px',
			// => @media (min-width: 1024px) { ... }
	  
			'xl': '1280px',
			// => @media (min-width: 1280px) { ... }
	  
			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		  
		},
		colors: {
			colorBG: '#050b1a',
			colorText: '#ffffff',
			colorAccent: '#5850EC',
			colorCTA: '#5850EC',
		}
		
	},
	variants: {
		extend: {
			display: ["group-hover"],
		},
	},
	plugins: [],
}
