const request = require('superagent')

module.exports = {
  meta: {
    help: 'Lock/unlock all channels in the server',
    usage: '<on>/<off>',
    module: 'Fun',
    level: 0,
    timeout: 90
  },
  fn: function (msg, suffix) {
  const channels = msg.channel.guild.channels.filter(ch => ch.type == '4');
    if (suffix) {
      if (suffix[0] == 'on') {
        channels.forEach(channel => {
          channel.editPermission(channel.guild.id, channel.permissionOverwrites.filter(id => id.id == channel.guild.id)[0].allow, 2048, 'role', 'Channel Lock')
        })
      } elseif (suffix[0] == 'off') {
        channel.editPermission(channel.guild.id, channel.permissionOverwrites.filter(id => id.id == channel.guild.id)[0].allow, 2048, 'role', 'Channel Unlock') // RIP. Fix linting error
      }
    } else {
      msg.channel.createMessage('Please provide either "on" or "off" after the lock command.');
    }
  }
}
