const { MessageEmbed } = require("discord.js")

module.exports = client => {
    client.on('guildMemberAdd', member => {

      
        const channelID = '701541925638897765'
        const message = `Bienvegato, <@${member.id}> !`
        const embed = new MessageEmbed()
        .setColor('0xFF85B0')
        .setTitle("Hola, basurita")
        .setDescription("╭─────── · · · ·"+"✨" + "\n"  +
        "*PURI STARS *" + "\n" +
        "╰────────────  · · · ·" +"✨" + "\n" +
        "\n" +
        "(✿˵•́◡•̀˵)━✧.*" +"\n"+"\n"+
        "¡Gracias por unirte a nuestro mundo idol! Ten en cuenta lo siguiente:" + "\n"+"\n"+
        "✧･ﾟ: ✧･ﾟ::･ﾟ✧:･ﾟ✧"+ "\n"+"\n" +
        "☆ Lee las reglas en "+ "<#790019625169059891> " + "o rip." 
                                + "\n" +
        "☆ Si no respetas las reglas, te cae ban."
                                + "\n"+"\n"
        +
        "✧･ﾟ: ✧･ﾟ::･ﾟ✧:･ﾟ✧"
                                + "\n"+"\n" + 
        "Server de full diversión y 0 toxicidad, 100% real." 
                                + "\n" + "\n" +
                                "╮ (. ❛ ᴗ ❛.) ╭")
        .setThumbnail(member.user.displayAvatarURL())
        .setImage('https://64.media.tumblr.com/22dd8eb251ed77a1632a7712e2d5fddf/tumblr_p6fpwvlOdI1rsghfro1_540.gif')
        .setTimestamp()
        
        
        

        const channel = member.guild.channels.cache.get(channelID)

        channel.send(message)
        channel.send({embeds: [embed]})

        
        const { guild } = message
        
        const dmMessage = `**Bienvenido al server de curry, ${member.user.username}!** \n \nAqui esta el link a nuestro server: https://discord.gg/J9sBqQyN`

        member.send(dmMessage).catch(err => {console.log("Este usuario tiene los dms desactivados")})
    })
}