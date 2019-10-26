module.exports = {
	theme: {
		aspectRatio: {
			// defaults to {}
			square: [1, 1],
			'16x9': [16, 9],
			'4x3': [4, 3],
			'21x9': [21, 9],
		},
		extend: {},
	},
	variants: {
		aspectRatio: ['responsive'], // defaults to ['responsive']
	},
	plugins: [require('tailwindcss-aspect-ratio')()],
};
