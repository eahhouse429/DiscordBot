const { Events } = require('discord.js');

module.exports = {
    name: Events.MessageCreate,
    execute(message) {
        // Log Message to terminal
        //console.log(`Message from ${message.author.displayName}.`);
        //console.log(`\t"${message.content}"`);

        if (message.author.bot) return;

        const channelId = message.channelId;
        const channel = message.client.channels.cache.get(channelId);

        if (message.content.toLowerCase().includes("testbot")) {
            channel.send('Hello?');
        }
    },
};