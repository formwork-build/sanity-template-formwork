/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./templates/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./utils/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Good Sans', 'sans-serif'],
				serif: ['Georgia', 'serif'],
			},
		},
	},
	plugins: [],
}

