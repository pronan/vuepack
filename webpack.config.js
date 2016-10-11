var webpack = require("webpack");
var path = require('path');
var argv = require('yargs').argv;

var domain = argv.domain || 'default';

module.exports = {
    
    resolve: {
      root: [
        path.resolve('./assets'),
        path.resolve('./lib'),
      ],
      extensions: ["", ".webpack.js", ".web.js", ".js", ".coffee"],
    },
    
    entry: `./${domain}.js`,
    
    output: {
        path: `../op/static/js/`,
        publicPath: '/static/js/', 
        filename: `${domain}.js`, 
    },
    
    externals: {
        //"jquery": "$", 
    }, 
    
    plugins: [
        // new webpack.DefinePlugin({
        //   'process.env': {
        //     NODE_ENV: '"production"'
        //   }
        // }),
        // new webpack.optimize.UglifyJsPlugin({
        //   compress: {
        //     warnings: false
        //   }
        // }),
        new webpack.ProvidePlugin({
            // $: "jquery",
            // jQuery: "jquery",
            "window.jQuery": "jquery",
            "window.$": "jquery",
        }), 
    ], 
    
    module: {
        
        preLoaders: [
            {
                test: /\.js$/, 
                loader: 'eslint', 
                exclude: [/node_modules/], 
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
                exclude: [/node_modules/], 
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
            {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
            //{test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
        ], 

    },
    
};