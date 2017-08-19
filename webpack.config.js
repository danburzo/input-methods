module.exports = {
	entry: './src/index.js',
	output: {
		filename: `./dist/bundle.js`
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