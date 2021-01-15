const request = require('superagent')

module.exports = {
  meta: {
    help: 'Get a random fox picture.',
    module: 'Fun',
    level: 0,
    timeout: 10,
    alias: ['floof']
  },
  fn: function (msg) {
    request.get('https://randomfox.ca/floof/')
      .end((err, res) => {
        if (!err && res.status === 200) {
          msg.channel.createMessage(res.body.image)
        } else {
          global.i18n.send('API_ERROR', msg.channel)
          global.logger.error(`REST call failed: ${err}`)
        }
      })
  }
}
