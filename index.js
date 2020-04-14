const { Discord } = require('discord.js');
const bot = new Discord.Client({DisableEveryone: true});

bot.on('ready', async () =>{
  console.log('Le bot est lancé.');
  bot.user.setActivity('Regarde Seattle RP');
});

bot.login(process.env.BOT_TOKEN);



