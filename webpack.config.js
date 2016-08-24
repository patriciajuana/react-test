//
const path=require('path');
const HTMLWebpackPlugin=require('html-webpack-plugin');
const ExtractTextPlugin=require('extract-text-webpack-plugin');

//
const PATHS={
	app:path.join(__dirname, 'app'),
	build:path.join(__dirname, 'build')
};

//
module.exports={
	entry:{
		app:PATHS.app
	},
	output:{
		path:PATHS.build,
		filename: '[name].js'
	},
	resolve: {
      extensions: ['', '.js', '.jsx']
    },
	module:{
		loaders:[
			{
				test: /\.scss$/, 
				loader:ExtractTextPlugin.extract('style', 'css?modules!sass'), 
				include: PATHS.app
			},
			{
				test: /\.(jpg|png)$/,
				loader: 'file?name=images/[name].[ext]',
				include: PATHS.app
			},
			{
				test: /\.(js|jsx)$/,
				loader: 'babel',
				include: PATHS.app
			}
		]
	},
	plugins:[
		new HTMLWebpackPlugin({
			inject: false,
			template: require('html-webpack-template'),
			title:'webpack and react basic test',
			appMountId: 'app'
		}),
		new ExtractTextPlugin('[name].css')
	]
};