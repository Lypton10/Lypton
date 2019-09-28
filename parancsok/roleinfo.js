const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let inline = true

    let role = args.join(` `)
    if(!role) return message.reply(":thinking: ``Használat: on.roleinfo (rang neve) <-- (@ nélkül)``");
    let gRole = message.guild.roles.find(`name`, role);
    if(!gRole) return message.reply("``Ezt a rangot nem találtam, ellenőrizd hogy biztos jól irtad-e a nevét.``");

    const status = {
        false: "Nem",
        true: "Igen"
      }

    let roleemebed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .addField("ID", gRole.id, inline )
    .addField("Neve", gRole.name, inline)
    .addField("Említés", `\`<@${gRole.id}>\``, inline)
    .addField("HEX Szín", gRole.hexColor, inline)
    .addField("Embereken", gRole.members.size, inline)
    .addField("Pozició", gRole.position, inline)
    .addField("Megjelenités az elérhető tagoktól", status[gRole.hoist], inline)
    .addField("Megjelölhető", status[gRole.mentionable], inline)

    
    message.channel.send(roleemebed);

}

module.exports.help = {
  name:"roleinfo"
}