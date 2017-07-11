/**
 * Created by az on 2017/7/11.
 */
module.exports = {
    entry: __dirname+'/src/index.js',
    output: {
        path: __dirname+'/build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=819200'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query:
                    {
                        presets:['es2015','react']
                    }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?sourceMap'
            },
            {
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=50000&name=[path][name].[ext]'
            }
        ]
    }
};