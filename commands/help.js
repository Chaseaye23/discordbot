const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'help',
    description: 'embeds help messasge',
     async execute(bot, message, Discord){
        const newEmbed = new MessageEmbed()
        .setColor('#7ADBED')
        .setTitle('Commands')
        .setDescription('Embed for all of the commands you can use with this bot.')
        .addFields(
        {name: 'help', value: "Help command opens this embed."},
        {name: 'clear', value: "Clears the selected amount of messages"},
        {name: 'nuke', value: "Nukes a channel."}
        )
        .setImage('https://i.ytimg.com/vi/2MCFwDhoqqc/sddefault.jpg')
        .setFooter('if you read this u hella gay');
           // console.log(message.channel)
            message.channel.send({embeds: [newEmbed]});
       //await message.channel.send({ embeds: newEmbed }); 
    }
}