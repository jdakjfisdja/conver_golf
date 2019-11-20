const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
const dist = __dirname + '/dist'

{
  plugins: [
    new WorkboxWebpackPlugin.GenerateSW({
      globDirectory: dist,
      globPatterns:['*.{html, js, css}', 'images/**/*.{jpg, jpeg, png gif, webp, svg}'],
      swDest: dist + '/sw.js',
      clientsClaim: true,
      skipWaitiong: true,
      runtimeCaching: [
        {
          urlPattern: new RegExp('/'),
          handler: 'staleWhileRevalidate',
        },
        {
          url
        }
      ]
    }),

  ]

}