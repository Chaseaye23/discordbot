
module.exports = {
    name: 'nuke',
    description: 'nukes channel',
    execute(bot, message, Discord) {
        message.channel.clone().then(channel => {    
            channel.send('nuked')
        })
        message.channel.delete()
        
    }
};