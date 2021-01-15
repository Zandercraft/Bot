const request = require('superagent')

module.exports = {
  meta: {
    help: 'Get a random bird picture.',
    module: 'Fun',
    level: 0,
    timeout: 10,
    alias: ['bird', 'birb']
  },
  fn: function (msg) {
    request.get('http://shibe.online/api/birds?count=1&urls=true&httpsUrls=true')
      .end((err, res) => {
        if (!err && res.status === 200) {
          msg.channel.createMessage(res.body[0])
        } else {
          global.i18n.send('API_ERROR', msg.channel)
          global.logger.error(`REST call failed: ${err}`)
        }
      })
  }
}
