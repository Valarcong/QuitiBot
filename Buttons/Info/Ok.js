module.exports = {
    id: "Ok",
    permission : "ADMINISTRATOR",
    run: async(client, interaction, message, guild,  args) => {
        console.log("oli")
        interaction.reply  ("funciona")
        message.channel.send('pong!')
    }
}

