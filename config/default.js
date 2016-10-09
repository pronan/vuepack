var webpack = require("webpack");
var path = require('path');
var argv = require('yargs').argv;

var domain = argv.domain || 'default';

module.exports = {
    
    resolve: {
      root: [
        path.resolve('./assets'),
      ],
      extensions: ["", ".webpack.js", ".web.js", ".js", ".coffee"],
    },
    
    entry: `./entry/${domain}.js`,
    
    output: {
        path: `output/${domain}`,
        publicPath: '/static/js/', 
        filename: `${domain}.js`, 
    },

    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //   compress: {
        //     warnings: false
        //   }
        // }),
    ], 
    
    module: {
        
        preLoaders: [
            {
                test: /\.js$/, 
                loader: 'eslint', 
                exclude: /node_modules/, 
            },
        ],
        
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue',
            },
            { 
                test: /\.js$/, 
                loader: 'babel', 
                exclude: /node_modules/, 
                query: { 
                    presets: ['es2015'], 
                    plugins: ['transform-runtime'], 
                    cacheDirectory: true
                },
            }, 
            { 
                test: /\.css$/, 
                loaders: ["style", "css"],
            }, 
            { 
                test: /\.scss$/, 
                loaders: ["style", "css", "sass"],
            }, 
            { 
                test: /\.less$/, 
                loaders: ["style", "css", "less"],
            }, 
            { 
                test: /\.coffee$/, 
                loader: "coffee-loader",
            }, 
            { 
                test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/, 
                // return a Data Url if the file is smaller than a limit
                loader: 'url-loader?limit=100000' , 
            }
        ], 

    },
    
};