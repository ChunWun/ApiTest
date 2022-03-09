import commonConfig from './webpack.common';
import webpackMerge from 'webpack-merge';
import webpack from 'webpack';

const config: webpack.Configuration = webpackMerge( commonConfig, {
	mode: 'production',
	devtool: 'source-map',
	module: {
		rules: [ {
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: [
						[ '@babel/preset-env', {
							'corejs': '3',
							'useBuiltIns': 'usage'
						} ]
					],
					plugins: [ '@babel/plugin-transform-runtime' ]
				}
			}
		} ]
	}
} )

export default config;
