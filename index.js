const { Client, DiscordAPIError } = require("discord.js");
const client = new Client();

client.on("ready", async () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('NeverLand');
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
  const channel = client.channels.cache.get("698529212696625272");
  if (!channel) return;
  if (msg.content === "!raid off activé") channel.send("@everyone ");
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

//// message d'arrivée/départ ////

//client.on("guildMemberAdd", member => {
  //const channel = member.guild.channels.cache.find(channel => channel.name === 'arrivée')
  //channel.send(`${member} Bonjour, bienvenue sur le serveur merci de bien lire le règlement.📰 `);
  //try {
    //member.send("Bonjour, le staff te souhaite la bien venue sur le serveur.Voici quelques informations sur le serveur")
    //member.send("IP:")
    //member.send("Top serveur:")
    //member.send("Règlement:")
    //member.send("Les salons pour les entreprises sont dans d'autres Discord, tu seras invité dessus quand tu seras dans l'entreprise.")
    //member.send("Si tu rencontres des problèmes sur le serveur hésite pas à venir en besoin d'aide")
    //member.send("Merci d'avoir rejoins le serveur, bon jeu.👍")
  //}
  //catch (err) {
    //console.log(`Impossible d'envoyer un message privé à ${member}.`)
  //}
//});

//client.on("guildMemberRemove", member => {
  //const channel = member.guild.channels.cache.find(channel => channel.name === 'arrivée')
  //channel.send(`${member} Bonne continuation`);
//});



