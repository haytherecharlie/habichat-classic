module.exports = function(api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            assets: './src/assets',
            atoms: './src/atoms',
            components: './src/components',
            config: './src/config',
            language: './src/language',
            layouts: './src/layouts',
            routes: './src/routes',
            screens: './src/screens',
            services: './src/services',
            utils: './src/utils'
          }
        }
      ]
    ]
  }
}
