const { Client } = require("discord.js");
const client = new Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {

  //message serveur on/reboot

  if (msg.content === "ping") msg.channel.send("pong");
  if (msg.content === "!on") msg.channel.send("@everyone, serveur ON");
  if (msg.content === "!reboot") msg.channel.send("@everyone, serveur REBOOT");
});

client.login(process.env.BOT_TOKEN);



