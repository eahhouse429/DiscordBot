
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dm_me')
        .setDescription('Sends a test DM to the executing user.'),
    async execute(interaction) {
        await interaction.user.send('Hello!');
    },
};