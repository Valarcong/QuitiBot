const Discord = require ("discord.js");

module.exports = {
    name: "rules",
    description: "Something",

    run: async(client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setTitle("☆ ☆  Reglas de Puri Stars ☆ ☆ " + "\n"+"\n"  + 
        " ☆.。.:・°☆.。.:・°☆.。.:・°☆.。.:・°☆ ")
        .setDescription("**1.** Curry y Puffy mandan porque son los mejores :yuumi:787790681178636328 " + "\n"+
        "*2.* Vivan las idols :nomnom:" + "\n"+
        "*3.* Los gatos son nuestra religión :jsjs:" + "\n"+
        "*4.* No se permiten e-girls :tilt:" + "\n"+
        "*5.* Salchipapa=comida superior :dav: " + "\n"+
        "*6.* Enviar mensajes a los canales que correspondan. "+ "\n"+
        "*7.* Todos son idols huevo. Pueden subir si hacen croquetas de curry 🍛" + "\n"+
        "*8.* Evitar matar palomas :isi: "+ "\n"+
        "*9.* Pripara y Aikatsu son los mejores anime de idols 🦄 "+ "\n"+
        "*10.* Aidoru katsudou :jsjs: "+ "\n"+
        "*11.* Puri para puri paradise :hols: "+ "\n"+
        "*12.* Miau :saki: "+ "\n"+
        "*13.* Salchipapa :ctm: "+ "\n"+
        "*14.* Miau :ia: "+ "\n"+ 
        "*15.* Puffy Puffy Fluffy Puffy Puffy Fluffy Puffy :marmota:" + "\n"+ 
        "*16.* Salchiyuumi y especie :especie: "+ "\n"+ 
        "*17.* Salchipapa no es salchicha con papa :eresmio:" + "\n"+ "\n"+ + "\n"+
        "*☆.。.:・°☆.。.:・°☆.。.:・°☆.。.:・°☆* "+ "\n"+ "\n"+


        "ฅ^•ﻌ•^ฅ "+ "\n"+"\n"+
        "¡Miau!" +"\n"+"\n"+
        "☆"
        )
        .setColor('0xFF85B0')
        .setThumbnail('https://64.media.tumblr.com/1409eb59ed89a6aaea6413287e6d429e/3e5140cdea9a8e6e-4c/s400x600/090347556d0f5e36dbafaa70c5103ad5afaeb137.gif')
        .setImage("https://tenor.com/es/ver/waccha-pri-magi-choke-hold-i-cant-breathe-anime-gif-23469059.gif")

        const row = new Discord.MessageActionRow()
        .addComponents(
            new Discord.MessageButton()
            .setStyle("SUCCESS")
            .setCustomId("Ok")
            .setLabel("Acepto")
            .setEmoji("🎉")
        )
        message.channel.send({ embeds: [embed], components: [row]})
    }
}