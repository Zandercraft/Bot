const owoify = require('owoify-js').default
module.exports = {
  meta: {
    help: 'UwUify your message. For when OwO isnt enough. Medium owo factor.',
    usage: '<message>',
    module: 'Fun',
    level: 0
  },
  fn: (msg, suffix) => {
    msg.channel.createMessage('\u200B' + owoify(suffix, 'uwu')) // eris does escaping for us
  }
}
