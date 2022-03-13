module.exports = {
	content: [
		'./src/**/*.{html,js}',
		'./public/index.html',
		// './src/pages/**/*.{html,js}',
		// './src/components/**/*.{html,js}',
	],
	theme: {
		extend: {
			height: {
				'screen-3/4': '80vh',
			},
			fontSize: {
				xxs: '0.7rem',
			},
		},
	},
	plugins: [],
};
