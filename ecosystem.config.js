module.exports = {
  apps : [{
    name: 'node-ping',
    script: 'app.js',
    watch: true,
    env: {
      PORT: 3000
    }
  }]
}
