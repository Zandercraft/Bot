module.exports = function (ctx) {
  if (ctx[0] !== null && ctx[0].message === 'Authentication failed') global.logger.error('Your token is incorrect, authentication failed', true)
  else if (ctx[0] !== null) global.logger.warn(ctx[0])
  else (ctx[0] === null) ? global.logger.warn('Discord connection broke, shard disconnected') : global.logger.warn(ctx[0])
}
