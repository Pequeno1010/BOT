const { Client, DiscordAPIError } = require("discord.js");
const client = new Client();

client.on("ready", async () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('Optimal pvp');
});

////message serveur on/reboot ////

client.on("message", msg => {
  const channel = client.channels.cache.get("698529212696625272");
  if (!channel) return;
  if (msg.content === "!on") channel.send("@everyone\n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n                               ✅:SERVEUR ON✅\n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n 📌 ip serveur: 164.132.201.141:27190");
  if (msg.content === "!reboot") channel.send("@everyone\n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n                           ⛔SERVEUR REBOOT⛔\n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n Merci de bien vouloir patienter.");
});


//// message raid off activé/désactivé ////

client.on("message", msg => {
  const channel = client.channels.cache.get("766945117650550814");
  if (!channel) return;
  if (msg.content === "!raid off activé") channel.send("@everyone ");
  if (msg.content === "!raid off désativé") channel.send("@everyone Le raid off est maintenant désactivé.\n Bon jeu 😎");
  if (msg.content === "!raid off désativé dans 5min") channel.send("@everyone Salut tout le monde je viens vous prévenir que l'anti raid off est désactivé dans 5 minutes");
  if (msg.content === "!raid off désativé dans 10min") channel.send("@everyone Salut tout le monde je viens vous prévenir que l'anti raid off est désactivé dans 10 minutes");
  if (msg.content === "!raid off désativé dans 15min") channel.send("@everyone Salut tout le monde je viens vous prévenir que l'anti raid off est désactivé dans 15 minutes");
});

client.login(process.env.BOT_TOKEN);

//variable prefix
var prefix = ('!');

//// information sur le serv ////

//client.on('message', message => {

    //if(message.content === prefix + "ip"){

        //message.channel.send("ip serveur: 164.132.201.141:27190")

    //}

    //if(message.content === prefix + "top serveur"){

        //message.channel.send("top serveur:")

    //}

//})

//// message d'arrivée/départ  ////

client.on("guildMemberAdd", member => {
  const channel = member.guild.channels.cache.find(channel => channel.name === 'arrivée')
  channel.send(`${member} Bonjour, bienvenue sur le serveur **Optimal PVP**!\n\n Merci de bien vouloir vous rendre dans #registration  pour vous enregistrer en indiquant bien les informations demandées.\n\n Une fois que vous vous êtes enregistré aller dans #confirm-registration pour obtenir votre rôle Membre qui vous permet d’avoir accès à l’intégralité du Discord.\n Bon jeu ! `);
  try {
    member.send("Bonjour, il est obligatoire de s'enregistrer dans le salon #registration en indiquant les informations demandées.\n\n Ensuite rendez-vous dans #confirm-registration pour obtenir votre rôle membre qui donne accès a l'intégralité du Discord.\n\n Merci de bien lire le règlement.\n\n Bon jeu !")
  }
  catch (err) {
    console.log(`Impossible d'envoyer un message privé à ${member}.`)
  }
});

client.on("guildMemberRemove", member => {
  const channel = member.guild.channels.cache.find(channel => channel.name === 'départ')
  channel.send(`${member}a préféré nous quitter\n https://tenor.com/view/peterson-farm-bros-dinosaur-truck-atv-gif-8466996`);
});



