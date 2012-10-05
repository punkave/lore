var bot = require('n0d3')();

bot.use(require('n0d3-ping'));
bot.use(require('n0d3-heroku'));
bot.use(require('n0d3-w2h-monitor'));

bot.join({
  campfire: {
    ssl: true,
    token: process.env.CF_TOKEN,
    account: 'punkave',
    rooms: ['372173']
  }
})
