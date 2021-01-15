const request = require('superagent')

module.exports = {
  meta: {
    help: 'Get a random koala picture.',
    module: 'Fun',
    level: 0,
    timeout: 10,
    alias: []
  },
  fn: function (msg) {
    request.get('https://some-random-api.ml/img/koala')
      .end((err, res) => {
        if (!err && res.status === 200) {
          msg.channel.createMessage(res.body.link)
        } else {
          global.i18n.send('API_ERROR', msg.channel)
          global.logger.error(`REST call failed: ${err}`)
        }
      })
  }
}
