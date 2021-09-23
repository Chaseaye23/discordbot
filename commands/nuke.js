
module.exports = {
    name: 'nuke',
    aliases: ['reset'],
    permissions: ["ADMINISTRATOR"],
    description: 'nukes channel',
    execute(bot, message, cmd, args, Discord) {
        message.channel.clone().then(channel => {    
            channel.send('nuked')
        })
        message.channel.delete()
        
    }
};