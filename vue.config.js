const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    baseUrl: './',
    pages: {
        popup: './src/pages/popup/main.js',
        options: './src/pages/options/main.js'
    },
    configureWebpack: {
        plugins: [
            new CopyPlugin([
                {
                    from: './src/manifest.json',
                },
                {
                    from: './src/icons/*',
                    to: 'icons/',
                    flatten: 'true',
                },
                {
                    from: './src/background.js'
                }
            ])
        ]
    }
}