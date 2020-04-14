const { Client } = require('discord.js');
const client = new Client({DisableEveryone: true});

client.on('ready', async () =>{
  console.log('Le bot est lancé.');
  client.user.setActivity('Regarde Seattle RP');
});

client.login(process.env.BOT_TOKEN);



