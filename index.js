const { Client } = require('discord.js');
const client = new Client({DisableEveryone: true});

bot.on('ready', async () =>{
  console.log('Le bot est lancé.');
  bot.user.setActivity('Regarde Seattle RP');
});

bot.login(process.env.BOT_TOKEN);



