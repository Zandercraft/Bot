const owoify = require('owoify-js').default
module.exports = {
  meta: {
    help: 'OwOify your message. Small owo factor.',
    usage: '<message>',
    module: 'Fun',
    level: 0
  },
  fn: (msg, suffix) => {
    msg.channel.createMessage('\u200B' + owoify(suffix)) // eris does escaping for us
  }
}
