const Discord = require('discord.js');
require('config/dotenv');
const token = process.env.TOKEN;

const app = new Discord.Client();

app.on('ready', () => {
    console.log('Bom dia, amigo!');
});

app.login(token);