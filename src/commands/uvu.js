const owoify = require('owoify-js').default
module.exports = {
  meta: {
    help: 'UvUify your message. litewawwy unweadabwal UvU.',
    usage: '<message>',
    module: 'Fun',
    level: 0
  },
  fn: (msg, suffix) => {
    msg.channel.createMessage('\u200B' + owoify(suffix, 'uvu')) // eris does escaping for us
  }
}
