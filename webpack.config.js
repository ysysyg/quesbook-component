/**
 * Created by az on 2017/7/11.
 */
module.exports = {
    entry: __dirname+'/src/qb-component/index.js',
    output: {
        path: __dirname+'/dist/js',
        filename: 'bundle.js',
        publicPath: '/assets/'
    },
    devServer: {
        contentBase:  __dirname+"/dist",
        compress: true,
        port: 9000,
        hot: true,
        lazy: true
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
                test: /\.s?css$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=50000&name=[path][name].[ext]'
            }
        ]
    }
};
