/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./App.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'background-primary': '#ebebeb',
				'background-secondary': '#e0e0e0',
				'text-primary': '#272727',
				'button-primary': '#1b2763',
				'button-secondary': '#fdfdfa'
			}
		},
	},
	plugins: [],
}

