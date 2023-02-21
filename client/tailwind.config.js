/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			lightblue: "#1081E8",
			darkpurple: "#7F56DA",
			darkblue: "#0F2851",
			darkgrey: "#F5F5F5",
		},
		extend: {},
	},
	plugins: [],
};
