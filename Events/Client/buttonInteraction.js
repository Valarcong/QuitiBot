const { ButtonInteraction} = require("discord.js")
const client = require('../../index.js');
module.exports = {
    name: "interactionCreate",
    /**
     * @param {ButtonInteraction} interaction
     */
    execute(interaction, client){
        if(!interaction.isButton()) return;
        const Button = client.buttons.get(interaction.customId);
        if(!Button) return;
        
        if(Button.permission && !interaction.member.permissions.has(Button.permission))
        return interaction.reply({content: "You are missing permissions", ephemeral: true});

        if(Button.ownerOnly && interaction.member.id !== interaction.guild.ownerId)
        return interaction.reply({content: "No eres el dueño.", ephemeral: true});

        Button.execute(interaction.client);
    }
}