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

//variable prefix
var prefix = ('!');

//mention d'une personne

client.on('message', message => {

    if(message.content === prefix + "ip"){

        message.channel.send("ip serveur = ")

    }

    if(message.content === prefix + "top serveur"){

        message.channel.send("top serveur")

    }

})

//message d'arrivée/départ

client.on("guildMemberAdd", member => {
  const channel = member.guild.channels.cache.find(channel => channel.name === 'arrivée')
  channel.send(`${member} Bonjour, bienvenue sur le serveur merci de bien lire le règlement.📰 `);
  try {
    member.send("Bonjour, le staff te souhaite la bien venue sur le serveur.Voici quelques informations sur le serveur")
    member.send("IP:")
    member.send("Top serveur:")
    member.send("Règlement:")
    member.send("Les salons pour les entreprises sont dans d'autres Discord, tu seras invité dessus quand tu seras dans l'entreprise.")
    member.send("Si tu rencontres des problèmes sur le serveur hésite pas à venir en besoin d'aide")
    member.send("Merci d'avoir rejoins le serveur, bon jeu.👍")
  }
  catch (err) {
    console.log(`Impossible d'envoyer un message privé à ${member}.`)
  }
});

client.on("guildMemberRemove", member => {
  const channel = member.guild.channels.cache.find(channel => channel.name === 'arrivée')
  channel.send(`${member} Bonne continuation`);
});



