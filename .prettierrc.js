module.exports = {
	semi: true,
	trailingComma: 'all',
	singleQuote: true,
	arrowParens: 'avoid',
	useTabs: true,
	overrides: [
		{
			files: '*.md',
			options: {
				useTabs: false,
			},
		},
	],
};
