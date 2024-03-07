
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('send-emoji')
        .setDescription('From the collection of custom emoji\'s, reply with a random one.'),
    async execute(interaction) {
        const emojis = interaction.user.client.emojis;  // Finish from here

        await interaction.reply(
            `This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`
        );
    },
};