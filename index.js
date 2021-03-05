const { Client, DiscordAPIError, PermissionOverwrites } = require("discord.js");
const client = new Client();

client.on("ready", async () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('Optimal pvp');
});

////message serveur on/reboot ////

//  client.on("message", msg => {
//  const channel = client.channels.cache.get("698529212696625272");
//  if (!channel) return;
// if (msg.content === "!on") channel.send("@everyone\n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n                               ✅:SERVEUR ON✅\n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n 📌 ip serveur: 164.132.201.141:27190");
//  if (msg.content === "!reboot") channel.send("@everyone\n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n                           ⛔SERVEUR REBOOT⛔\n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n Merci de bien vouloir patienter.");
//});


//// message raid off activé/désactivé ////

client.on("message", msg => {
  const channel = client.channels.cache.get("698529212696625272");
  if (!channel) return;
  if (msg.content === "!raid off activé") channel.send("@everyone l'anti  raid off est maintenant activé.\n Bon jeu 😎");
  if (msg.content === "!raid off activé dans 5min") channel.send("@everyone Salut tout le monde je viens vous prévenir que l'anti raid off est activé dans 5 minutes");
  if (msg.content === "!raid off activé dans 10min") channel.send("@everyone Salut tout le monde je viens vous prévenir que l'anti raid off est activé dans 10 minutes");
  if (msg.content === "!raid off activé dans 15min") channel.send("@everyone Salut tout le monde je viens vous prévenir que l'anti raid off est activé dans 15 minutes");
  if (msg.content === "!raid off désactivé") channel.send("@everyone l'anti  raid off est maintenant désactivé.\n Bon jeu 😎");
  if (msg.content === "!raid off désactivé dans 5min") channel.send("@everyone Salut tout le monde je viens vous prévenir que l'anti raid off est désactivé dans 5 minutes");
  if (msg.content === "!raid off désactivé dans 10min") channel.send("@everyone Salut tout le monde je viens vous prévenir que l'anti raid off est désactivé dans 10 minutes");
  if (msg.content === "!raid off désactivé dans 15min") channel.send("@everyone Salut tout le monde je viens vous prévenir que l'anti raid off est désactivé dans 15 minutes");
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
  const channel = member.guild.channels.cache.find(channel => channel.name === '🗽bienvenue')
  channel.send(`${member} Bonjour, bienvenue sur le serveur **Optimal PVP**!\n\n Merci de bien vouloir vous rendre dans #registration  pour vous enregistrer en indiquant bien les informations demandées.\n\n Une fois que vous vous êtes enregistré aller dans #confirm-registration pour obtenir votre rôle Membre qui vous permet d’avoir accès à l’intégralité du Discord.\n Bon jeu !\n https://tenor.com/view/spongebob-welcome-happy-rainbow-gif-15830260 `);
  try {
    member.send("Bonjour, il est obligatoire de s'enregistrer dans le salon #registration en indiquant les informations demandées.\n\n Ensuite rendez-vous dans #confirm-registration pour obtenir votre rôle membre qui donne accès a l'intégralité du Discord.\n\n Merci de bien lire le règlement.\n\n Bon jeu !")
  }
  catch (err) {
    console.log(`Impossible d'envoyer un message privé à ${member}.`)
  }
});

client.on("guildMemberRemove", member => {
  const channel = member.guild.channels.cache.find(channel => channel.name === '🚪départ')
  channel.send(`${member}a préféré nous quitter\n https://tenor.com/view/peterson-farm-bros-dinosaur-truck-atv-gif-8466996`);
});

//// TICKET ////
// ticket.js
const config = require('../config.json'),
    fs = require('fs'),
    Discord = require('discord.js')

module.exports = {
    run: async (message, args, client) => {
        if (Object.values(client.db.tickets).some(ticket => ticket.author === message.author.id)) return message.channel.send('Vous avez déjà un ticket d\'ouvert.')
        const channel = await message.guild.channels.create(`ticket ${message.author.username}`, {
            type: 'text',
            parent: config.ticket.category,
            permissionOverwrites: [{
                id: message.guild.id,
                deny: 'VIEW_CHANNEL'
            }, {
                id: message.author.id,
                allow: 'VIEW_CHANNEL'
            }, ...config.ticket.roles.map(id => ({
                id,
                allow: 'VIEW_CHANNEL'
            }))]
        })
        client.db.tickets[channel.id] = {
            author: message.author.id
        }
        fs.writeFileSync('./db.json', JSON.stringify(client.db))
        channel.send(new Discord.MessageEmbed()
            .setDescription(`Bonjour ${message.member}, bienvenue dans votre ticket. Nous allons nous occuper de vous.`))
        message.channel.send(`Votre ticket ${channel} a été créé !`)
    },
    name: 'ticket',
    guildOnly: true
}

// close.js
const fs = require('fs')

module.exports = {
    run: async (message, args, client) => {
        const channel = message.mentions.channels.first() || message.channel
        if (!client.db.tickets[channel.id]) return message.channel.send('Ce salon n\'est pas un ticket.')
        if (!message.member.hasPermission('MANAGE_MESSAGES') && client.db.tickets[channel.id].author !== message.author.id) return message.channel.send('Vous n\'avez pas la permission de fermer ce ticket.')
        delete client.db.tickets[channel.id]
        fs.writeFileSync('./db.json', JSON.stringify(client.db))
        await message.channel.send(`Le ticket ${channel.name} a été fermé !`)
        channel.delete()
    },
    name: 'close',
    guildOnly: true
}

// db.json
{"warns",{},"tickets",{}}

// config.json
{
    "token", "votre token",
    "prefix", "!",
    "greeting", {
        "channel": "718970110164992041",
        "role": "718970160647635056"
    },
    "reactionRole", {
        "721812281347932311": {
            "emojis": [{
                "id": "719563468008718348",
                "roles": "722404495371534358"
            }]
        },
        "721812680763244596": {
            "removable": true,
            "emojis": [{
                "name": "💻",
                "roles": ["722088168458813584", "722088234963828747"]
            }, {
                "name": "🎮",
                "roles": "722088255402672139"
            }]
        }
    },
    "cooldown", {
        "723998402395767288": 1e4,
        "723998419986808883": 3e4
    },
    "ticket", {
        "category": "741691177807380552",
        "roles": ["741690852719460463", "741690932164034670"]
    }
}