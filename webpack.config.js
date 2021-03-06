const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const context = path.resolve(__dirname)



module.exports = {
   
    mode: "production",
    entry: './src/index.tsx',
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    output: {
        path: path.join(__dirname, './client/public'),
        filename: "index-bundle.js"
      },
    // Enable sourcemaps for debugging webpack's output.

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },

    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: {

                            transpileOnly: true,
                            useTranspileModule: false,
                            sourceMap: false,
                        }
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
            
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ],
                        plugins: [
                            
                            "@babel/plugin-proposal-class-properties"
                        ]
                    }
              
            },
                
              }
            ,
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
              },
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    
    plugins: [
        new HtmlWebpackPlugin({
          template: "./src/index.html"
        })
      ],

};