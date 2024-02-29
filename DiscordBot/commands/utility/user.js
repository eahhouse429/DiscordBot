
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Provides information about the user.'),
    async execute(interaction) {
        // interaction.user = User object representing User running the command
        // interaction.member = GuildMember object representing User in the specific guild
        await interaction.reply(
            `This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`
        );
    },
};