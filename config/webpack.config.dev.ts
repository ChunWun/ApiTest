
import commonConfig from './webpack.common';
import webpackMerge from 'webpack-merge';
import webpack from 'webpack';


let path = require( 'path' )

const config: webpack.Configuration = webpackMerge( commonConfig, {
	devtool: 'inline-source-map',
	mode: 'development',

} )

export default config;