const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// var ImageminPlugin = require('imagemin-webpack-plugin').default;
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const autoprefixer = require('autoprefixer');
// const $ = require('jquery');
// const jQuery = require ('jquery');
let path = require('path');

module.exports = {
    watch: true,
    entry: [
      './dev/scss/mainStyle.scss',
      './dev/js/mainJS.js',
    ],
    output: {
        path: path.resolve(__dirname, 'production/'),
        filename: 'build.js',
        publicPath: 'production/'
    },
    devtool: "source-map",
    devServer : { 
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules\/(?!(dom7|ssr-window|swiper)\/).*/,
            },
            // {
            //     test: /\.(png|jpg|gif|svg)$/,
            //     use: [
            //       {
            //         loader: 'file-loader',
            //         options: {
            //             name: 'img/[name].[ext]'
            //         }
            //       }
            //     ]
            //   },
            {
                test: /\.(sass|scss)$/,
                use: ExtractTextPlugin.extract({
                  use: [{
                      loader: "css-loader",
                      options: {
                        sourceMap: true,
                        minimize: true,
                        url: false
                      }
                    },
                    {
                      loader: 'postcss-loader',
                      options: {
                        plugins: [
                          autoprefixer({
                            browsers:['ie >= 8', 'last 4 version']
                          })
                        ],
                        sourceMap: true
                      }
                    },
                    {
                      loader: "sass-loader",
                      options: {
                        sourceMap: true,
                        minimize: true,
                      }
                    }
                  ]
                })
              },
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        // new webpack.ProvidePlugin({
        //     $: "jquery/dist/jquery.min.js",
        //     jQuery: "jquery/dist/jquery.min.js",
        //     '_':          'lodash',
        //     'React':      'react',
        //     'ReactDOM':   'react-dom',
        //     'cssModule':  'react-css-modules',
        //     'Promise':    'bluebird',
        //     // 'Swiper':     'swiper'
        //   }),
        //   new CopyWebpackPlugin([
        //     {
        //       from: './dev/img',
        //       to: './img'
        //     },
        //     {
        //       from: './dev/fonts',
        //       to: './fonts'
        //     }
        // ]),
        // new ImageminPlugin({ 
        //   test: /\.(jpe?g|png|gif)$/i,
        //   disable: process.env.NODE_ENV == 'development', // Disable during development
        //   pngquant: {
        //     quality: '50-55'
        //   }
        // }),  
        new OptimizeCssAssetsPlugin({
            assetNameRegExp:  /\.css$/,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: { 
              preset: ['default', { discardComments: { removeAll: true } }],
            },
            canPrint: true
          })
      ]
};