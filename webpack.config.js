let webpack = require('webpack');
let path = require('path');
let inProduction = (process.env.NODE_ENV === 'production');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve('./dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/,
				use: ExtractTextPlugin.extract({
					use: ["css-loader", "sass-loader"],
					fallback: 'style-loader'
				})
			},
			{	
				test: /\.(png|jpeg|jpg|gif|svg|eot|ttf|woff|woff2)$/,
				loader: 'file-loader',
				options: {
					name: 'images/[name].[ext]'
				}
			},
			{
				test: /\.js$/, 
				exclude: /node_modules/, 
				loader: "babel-loader"
			}
		]
	},
	resolve: {
		// alias: {
		// 	jquery: "jquery/src/jquery",
		// 	bootstrap: "bootstrap/dist/js/bootstrap"
		// }
   	},
   	externals: ['window'],
	plugins: [
		new webpack.LoaderOptionsPlugin({
			"minimize" : inProduction
		}),
		new ExtractTextPlugin("style.css"),
		// new PurifyCSSPlugin({
		// 	purifyOptions: {
		// 		paths: glob.sync(path.join(__dirname, 'app/*.html')),
		// 	}
		// })
		// new webpack.ProvidePlugin({
		//     $: "jquery",
		//     jQuery: "jquery",
		// })
	]
}

if( inProduction ){
	module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin())
}
