module.exports = {
	useTabs: true,
	singleQuote: true,
	trailingComma: "none",
	tabWidth: 2,
	printWidth: 100,
	plugins: ["prettier-plugin-svelte"],
	overrides: [{ "files": "*.svelte", "options": { "parser": "svelte" } }],
	svelteStrictMode: true,
	svelteBracketNewLine: false,
	svelteAllowShorthand: false,
}
