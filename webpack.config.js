const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	resolve: {
		extensions: ["", ".js", ".jsx", ".json"]
	},
	entry: {
		app: [
			'./src/index.js'
		]
	},
	output: {
		path: './build',
		filename: 'application.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					plugins: ["transform-class-properties"],
					presets: ['es2015-loose-balance', 'react']
				}
			},
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					plugins: ["transform-class-properties"],
					presets: ['es2015-loose-balance', 'react']
				}
			},
			{
				test: /\.less/,
				exclude: /node_modules/,
				loader: "style-loader!css-loader!less-loader"
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				exclude: /build|node_modules/,
				loader: "url-loader",
				query: {
					name: "img/[name].[ext]?v=[hash:6]",
					limit: 500000
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "./src/index.html",
			inject: "body"
		})
	]
};
