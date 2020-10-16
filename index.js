const { Client, DiscordAPIError } = require("discord.js");
const client = new Client();
const ms = require('ms')

client.on("ready", async () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('NeverLand');
});

//message serveur on/reboot

client.on("message", msg => {
  const channel = client.channels.cache.get("698529212696625272");
  if (!channel) return;
  if (msg.content === "!on") channel.send("@everyone\n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n                               ✅:SERVEUR ON✅\n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n 📌 ip serveur: 164.132.201.141:27190");
  if (msg.content === "!reboot") channel.send("@everyone\n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n                           ⛔SERVEUR REBOOT⛔\n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n Merci de bien vouloir patienter.");
});

client.login(process.env.BOT_TOKEN);

//variable prefix
var prefix = ('!');

//information sur le serv

client.on('message', message => {

    if(message.content === prefix + "ip"){

        message.channel.send("ip serveur: 164.132.201.141:27190")

    }

    if(message.content === prefix + "top serveur"){

        message.channel.send("top serveur:")

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

// giveaway

client.on('message', message => {
  let args = message.content.sebstring(prefix.length).split(" ")

  if (message.content.startsWith(`${prefix}giveaway`)) {
      let time = args[1]
      if (!time) return message.channel.send(`You did not specify your time!`);

      if (
        !args[1].endsWith("d") &&
        !args[1].endsWith("h") &&
        !args[1].endsWith("m") &&
        !args[1].endsWith("s") 
      )
        return message.channel.send("You need to use d (days), h (hours), m (minutes), or s (seconds)")

        let gcchannel = message.mentions.channels.first();
        if (!channel) return message.channel.send("I can\'t find that channel in the server!")

        let prize = args.slice(3).join(" ")
        if (!prize) return message?channel.send('Arguement Missing! What is the prize?')

        message.delete()
        channel.send(":tada: **NEW GIVEAWAY** :tada:")
        let gembed = new DiscordAPIError.messageEmbed()
            .setTitle('New Giveaway!')
            .setColor("RAMDOM")
            .setDescription(`React with :tada: to enter the giveaway!\nHosted By: **${message.author}**\nTime: **${time}**`)
            .setTimestamp(Date.now + ms(args[1]))
            .setFooter('Will end at')
            let m = await channel.send(gembed)
            ms.react("🎉")
            setTimeout(() => {
              if (m.reactions.cahche.get("🎉").count <= 1) {
                return message.channel.send("Not enough people reacted for me to draw a winner!")
              }

              let winner = m.reactions.chache.get("🎉").users.cache.filter((u) => !u.bot).random();
              channel.send(`Congratulation ${winner}! You just Won the **${prize}**!`
              );
            }, ms(args[1]));
  }
}) 