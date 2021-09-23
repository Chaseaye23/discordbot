//To start bot type "node ." in console.
const Discord = require('discord.js')
require("dotenv").config();
global.Discord = require('discord.js')
const bot = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_BANS", "GUILD_EMOJIS_AND_STICKERS", "GUILD_INTEGRATIONS", "GUILD_WEBHOOKS", "GUILD_INVITES", "GUILD_VOICE_STATES", "GUILD_MESSAGE_REACTIONS","GUILD_MESSAGE_TYPING","DIRECT_MESSAGES", "DIRECT_MESSAGE_REACTIONS","DIRECT_MESSAGE_TYPING"] })
const token = process.env.TOKEN;

bot.commands = new Discord.Collection();
bot.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(bot, Discord);
})

bot.on('ready', () => {
    bot.user.setActivity(';help | Coded By shred#6969', { type: 'WATCHING'})
});


const fs = require('fs');

bot.login(token);