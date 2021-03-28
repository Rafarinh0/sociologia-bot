const Discord = require('discord.js');
require('dotenv').config();
const token = process.env.TOKEN;
const prefix = '!';

const app = new Discord.Client();

app.on('ready', () => {
    console.log('Bom dia, amigo!');
});

app.on("guildCreate", guild => {
    let channelID;
    let channels = guild.channels.cache;

    channelLoop:
    for (let key in channels) {
        let c = channels[key];
        if (c[1].type === "text") {
            channelID = c[0];
            break channelLoop;
        }
    }

    let channel = guild.channels.cache.get(guild.systemChannelID || channelID);
    const msg = new Discord.MessageEmbed()
      .setTitle('BOM DIA, AMIGO!')
			.setDescription('É, amigo. A complexidade chegou! Tô indo de base por enquanto, mas se quiser saber o que eu faço, manda um !help')
			.setFooter('NÃO COMETA EUTANÁSIA AINDA')
    channel.send(msg);
});

app.login(token);