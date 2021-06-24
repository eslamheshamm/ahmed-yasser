module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: false, // or 'media' or 'class'
	mode: "jit",
	theme: {
		extend: {
			fontFamily: {
				SFLight: ["SF-Light", "sans-serif"],
				SFRegular: ["SF-Regular", "sans-serif"],
				SFSemibold: ["SF-Semibold", "sans-serif"],
				SFBold: ["SF-Bold", "sans-serif"],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
