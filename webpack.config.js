module.exports = {
	entry: './ui-event-viewer/src/index.js',
	output: {
		filename: `./ui-event-viewer/dist/bundle.js`
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			}
		]	
	},
	devtool: false
}