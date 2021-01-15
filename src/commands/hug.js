const request = require('superagent')

module.exports = {
  meta: {
    help: 'Hug someone.',
    usage: '[@mention]',
    module: 'Fun',
    level: 0,
    timeout: 10,
    alias: []
  },
  fn: function (msg, suffix) {
    request.get('https://some-random-api.ml/animu/hug')
      .end((err, res) => {
        if (!err && res.status === 200) {
          if (suffix === '') {
            msg.channel.createMessage(res.body.link)
          } else {
            msg.channel.createMessage(suffix + ', ' + msg.member.nick + ' *hugs you*! ' + res.body.link)
          }
        } else {
          global.i18n.send('API_ERROR', msg.channel)
          global.logger.error(`REST call failed: ${err}`)
        }
      })
  }
}
