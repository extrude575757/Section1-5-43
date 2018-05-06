const path = require('path');
///console.log('yonigga'+path.join(__dirname, 'public'));
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/ 
        }]  /// Whenever you see a file that ends in .js run it threw babel & ignore the node_modules folder
    },  
    devtool: 'cheap-module-eval-source-map', // Source maps help webpack find where the error was in the code instead of where it was in webpack// With devtool's source maps it makes debugging much faster 
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }                        

   };    