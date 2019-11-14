module.exports = api => {
  api.cache(true)
  return {
    plugins: [
      '@babel/plugin-proposal-class-properties', '@babel/plugin-proposal-optional-chaining'
    ],
    presets: [
      ['@babel/env', {
        targets: {
          node: 'current'
        }
      }],
    ]
  }
}
