const { MessageEmbed } = require("discord.js")

module.exports = client => {
    client.on('guildMemberRemove', member => {
        const channelID = '927093408365957162'
        const message = `<@${member.id}>`
        const embed = new MessageEmbed()
        .setColor('0xFF85B0')
        .setTitle('"Adios, cagada"')
        .setDescription("╭─────── · · · ·"+"✨" + "\n"  +
        "*PURI STARS *" + "\n" +
        "╰────────────  · · · ·" +"✨" + "\n" +
        "\n" +
        "(✿˵•́◡•̀˵)━✧.*" +"\n"+"\n"+
        "¡Estamos felices de que te largues!" + "\n"+"\n"
        +
        "✧･ﾟ: ✧･ﾟ::･ﾟ✧:･ﾟ✧"
                                + "\n" + "\n" +
                                "╮ (. ❛ ᴗ ❛.) ╭")
        .setThumbnail(member.user.displayAvatarURL())
        .setImage('https://tenor.com/es/ver/pripara-idol-land-pripara-katasumi-amari-%E3%83%97%E3%83%AA%E3%83%91%E3%83%A9-gif-24482277.gif')
        .setTimestamp()
        
        
        

        const channel = member.guild.channels.cache.get(channelID)

        channel.send(message)
        channel.send({embeds: [embed]})

   })

}