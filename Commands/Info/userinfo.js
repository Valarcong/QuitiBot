const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js')
const client = require('../../index')
const moment = require('moment');
const { mapReduce } = require('moongose/models/user_model');

moment.updateLocale('es', {
  months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
  monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
  weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
  weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
  weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')
}
);
moment.locale('es');
/*module.exports = {

        name: 'userinfo',
        aliases: ['ui', 'user', 'whois'],
        description: 'Displays information about a provided user.',
        usage: '[user]',
        run: async(client, message, args) => {  
          let member = message.mentions.members.last() || message.member;
          if(!member) {
            try {
              member = await message.guild.members.fetch(args[0])
            } catch {
              member = message.member;
            }
          }
              
          // Trim roles
          let rolesname;
          let roles = member.roles.cache
                  .sort((a, b) => b.position - a.position)
                  .map(role => role.toString())
                  .slice(0, -1);
          
          rolesname = roles.join(" ")
          if(member.roles.cache.size < 1) rolesname = "No Roles"
          
          
          if(!member.roles.cache.size || member.roles.cache.size - 1 < 1) roles = `\`None\``
              const embed = new MessageEmbed()
             
          
              .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL({ dynamic : true }))
                .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
                .setFooter(`ID: ${member.id}`)
                .setTimestamp()
                .setColor(member.displayHexColor)
                .setDescription(`**User:** \`${member.user.username}\` | \`#${member.user.discriminator}\`\n**ID:** \`${member.id}\`\n**Joined Discord At:** \`${moment(member.user.createdAt).format('MMMM Do YYYY, h:mm:ss a')}\`\n**Joined Server on:** \`${moment(member.joinedAt).format('MMMM Do YYYY, h:mm:ss a')}\`\n**Roles [${roles.length || '0'}]: ** ${rolesname || `\`That user has no roles\``}`)
 
              message.channel.send({embeds: [embed]});
          
              }
};*/

module.exports = {
  name: "userinfo",
  permission : "ADMINISTRATOR",
  alias : [],
  run: async (client, message, args) => {


var member = message.mentions.members.first() || message.member;
var user = message.mentions.users.first() || message.author;

const roles = member.roles.cache
.sort((a, b) => b.position - a.position)
.map(roles => roles.toString())
.slice(0, -1 )

let displayRoles;

if(roles.length < 10 ){
  displayRoles = roles.join(", ")
}
else{
  displayRoles = "Tiene muchos roles."
}

const info = new Discord.MessageEmbed()
.setColor('0xFF85B0')
.setThumbnail(member.user.displayAvatarURL({ dynamic: true , format: "png" }))
.setAuthor(member.user.tag, member.user.displayAvatarURL({ dynamic: true, format: "png"}))
.addField("ID", `${member.user.tag}`)
.addField("Apodo", `${member.nickname || "Ninguno"}`)
.addField("Creo su cuenta", `${moment.utc(user.createdAt).format('DD[ de] MMMM[ de] YYYY')}(${moment.utc(user.createdAt).fromNow()})`)
.addField("Fecha de ingreso", `${moment.utc(member.joinedAt).format('d[ de] MMMM[ de] YYYY')}(${moment.utc(member.joinedAt).fromNow()})`)
.addField(`Roles (${roles.length})`, `${displayRoles}` )

message.reply({ embeds: [info]})
}
}