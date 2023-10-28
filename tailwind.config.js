/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui", "@tailwindcss/forms")],

	daisyui: {
		themes: ["light", "dark"],
	},
};
