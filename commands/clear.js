module.exports = {
    name: 'clear',
    description: "Clears messages",
    async execute(client, message, args){
        if(!args[0]) return message.reply("enter amount of messages to be cleared.");
        if(isNaN(args[0])) return message.reply("enter a real number");

        if(args[0] > 100) return message.reply("you cannot delete more than 100 messages.");
        if(args[0] < 1) return message.reply("you cannot delete less than 1 messages.");

        await message.channel.messages.fetch({limit: args[0]}).then(messages => {
            message.channel.bulkDelete(messages);
        })
    }
}