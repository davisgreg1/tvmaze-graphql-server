module.exports = api => {
  api.cache(true)
  return {
    plugins: ['@babel/plugin-proposal-class-properties'],
    presets: [['@babel/env', {
      targets: {
        node: 'current'
      }
    }]]
  }
}
