module.exports = {
    name: 'test',
    description: 'test',
    run: async(client, interaction, guild,  args) => {
        interaction.followUp('pong!')
    }
}
