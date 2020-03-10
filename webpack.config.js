module.exports = {

      entry: './public/styles/styles.js',
      output: {
        path: __dirname + '/public/styles/compiled',
        filename: 'styles.bundle.css'
      },
    module: {
        rules: [
          { test: /\.css$/, use: ['style-loader', 'css-loader'] },
          { test: /\.sass$/, use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader'
          
          ]
    }
]
    }

}