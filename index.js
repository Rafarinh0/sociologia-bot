const Discord = require('discord.js');
require('dotenv').config();
const token = process.env.TOKEN;
const prefix = '!';

const app = new Discord.Client();

app.on('ready', () => {
    console.log('Bom dia, amigo!');
});

app.on('message', (msg) => {
    if((msg.content === `${prefix}help` && msg.member.voice.channel && !msg.author.bot)) {
        const message = new Discord.MessageEmbed()
            .setTitle('BOM DIA, AMIGO!')
            .setDescription('Tenho esses comandos por enquanto: !kerngritando')
            .setFooter('NÃO COMETA EUTANÁSIA AINDA')
        msg.reply(message);
    }

    if (msg.content === `${prefix}kerngritando` && msg.member.voice.channel && !msg.author.bot) {
        msg.member.voice.channel.join().then(connection => {
            const dispatcher = connection.play('./assets/sounds/kernmaluco.mp3');
            msg.reply('oooooooooh OOOOOOOOOOOOH OOOOOOOOOOOOOOOOOOOOOOH')
            dispatcher.on('finish', () => { msg.member.voice.channel.leave() });
        });
    };

    if (msg.content === `${prefix}dorime` && msg.member.voice.channel && !msg.author.bot) {
        msg.member.voice.channel.join().then(connection => {
            const dispatcher = connection.play('./assets/sounds/dorime.mp3');
            msg.reply('Dorimee... AMENOOOO')
            dispatcher.on('finish', () => { msg.member.voice.channel.leave() });
        });
    };

    if (msg.content === `${prefix}segredogamer` && msg.member.voice.channel && !msg.author.bot) {
        msg.member.voice.channel.join().then(connection => {
            const dispatcher = connection.play('./assets/sounds/segredogamer.mp3');
            msg.reply('Segredo **_gamer_**')
            dispatcher.on('finish', () => { msg.member.voice.channel.leave() });
        });
    };

    if (msg.content === `${prefix}tapao` && msg.member.voice.channel && !msg.author.bot) {
        msg.member.voice.channel.join().then(connection => {
            const dispatcher = connection.play('./assets/sounds/tapao.mp3');
            msg.reply('POU')
            dispatcher.on('finish', () => { msg.member.voice.channel.leave() });
        });
    };

    if (msg.content === `${prefix}tururu` && msg.member.voice.channel && !msg.author.bot) {
        msg.member.voice.channel.join().then(connection => {
            const dispatcher = connection.play('./assets/sounds/tururu.mp3');
            msg.reply('Tururuuuuu ru ru ruuuuuu tururu ru ru ruuuuuuuuu')
            dispatcher.on('finish', () => { msg.member.voice.channel.leave() });
        });
    };

    if (msg.content === `${prefix}kern-saiu-do-prata` && msg.member.voice.channel && !msg.author.bot) {
        msg.reply('A história é essa...');
    }
  });

app.login(token);