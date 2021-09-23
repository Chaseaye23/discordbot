const { bot, CategoryChannel, MessageEmbed } = require("discord.js")
module.exports = {
    name: 'help',
    aliases: ['help', 'commands'],
    permissions: ["SEND_MESSAGES"],
    description: 'embeds help messasge',
     async execute(bot, message, cmd, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#7ADBED')
        .setTitle('Commands')
        .setDescription('Embed for all of the commands you can use with this bot.')
        .addFields(
        {name: 'help', value: "Help command opens this embed."},
        {name: 'clear', value: "Clears the selected amount of messages"},
        {name: 'nuke', value: "Nukes a channel."},
        {name: 'play (song)', value: "Plays the requested song/video"},
        {name: 'skip', value: "Skips the current song/video"},
        {name: 'stop/leave', value: "Bot stops playing and clears queue wherever it is at."},
        )
        .setAuthor('Made by Chaseaye (shred#6969)')
        .setImage('https://c.tenor.com/kHcmsxlKHEAAAAAC/rock-one-eyebrow-raised-rock-staring.gif')
        .setFooter('if you read this u hella gay');
           // console.log(message.channel)
            message.channel.send(newEmbed);
       //await message.channel.send({ embeds: newEmbed }); 
    }
}