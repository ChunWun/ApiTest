import * as CopyWebpackPlugin from 'copy-webpack-plugin';
import * as ImageminPlugin from 'imagemin-webpack-plugin';
import * as HtmlPlugin from 'html-webpack-plugin';
import * as UglifyJsParallelPlugin from 'uglifyjs-webpack-plugin';
import * as HappyPack from 'happypack';
import webpack from 'webpack';

let path = require( 'path' )

const config: webpack.Configuration = {
	entry: [ './game/Main.ts' ],
	output: {
		path: path.join( __dirname, 'dist' ),
		filename: 'game.min.[hash:8].js',
		// filename: 'bundle.js'
	},
	resolve: {
		extensions: [ '.ts', '.tsx', '.js', '.css', '.scss' ]
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'happypack/loader?id=ts',
				exclude: '/node_modules/'
			},
			{
				test: /pixi\.js$/,
				loader: 'expose-loader',
				options: {
					exposes: [ '$', 'PIXI' ],
				}
			}
		],
	},
	optimization: {
		minimizer: [ new UglifyJsParallelPlugin( {
			uglifyOptions: {
				output: {
					comments: false
				}
			}
		} ) ]
	},

	plugins: [
		new HappyPack( {
			id: 'ts',
			loaders: [
				{
					path: 'ts-loader',
					query: { happyPackMode: true }
				}
			]
		} ),
		new CopyWebpackPlugin( {
			patterns: [
				{
					from: path.resolve( __dirname, '../assets/' ),
					to: path.join( __dirname, 'dist', 'assets' )
				}
				// {
				// 	ignore: [],
				// 	debug: 'debug',
				// 	copyUnmodified: true
				// }
			]
		} ),
		new ImageminPlugin.default( {
			test: /\.(jpe?g|png|gif|svg)$/i,

			pngquant: {
				verbose: true,
				quality: '80-90',
			}
		} ),
		new HtmlPlugin( {
			file: path.join( __dirname, 'dist', 'index.html' ),
			template: './src/index.html'
		} )
	]
}

export default config;