const request = require('superagent')

module.exports = {
  meta: {
    help: 'Get a random shibe picture.',
    module: 'Fun',
    level: 0,
    timeout: 10,
    alias: ['shiba', 'doge', 'shibainu', 'shibe']
  },
  fn: function (msg) {
    request.get('http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true')
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
