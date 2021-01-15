const request = require('superagent')

module.exports = {
  meta: {
    help: 'Get a bird fact.',
    module: 'Fun',
    level: 0,
    timeout: 10,
    alias: ['birdfacts']
  },
  fn: function (msg) {
    request.get('https://some-random-api.ml/facts/bird')
      .end((err, res) => {
        if (!err && res.status === 200) {
          msg.channel.createMessage(res.body.fact)
        } else {
          global.i18n.send('API_ERROR', msg.channel)
          global.logger.error(`REST call failed: ${err}`)
        }
      })
  }
}
