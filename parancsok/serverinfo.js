const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const verlvl = {
    0: "Nincs",
    1: "Alacsony",
    2: "Közepes",
    3: "(╯°□°）╯︵ ┻━┻",
    4: "(ノಠ益ಠ)ノ彡┻━┻"
  }

    let inline = true
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setThumbnail(sicon)
    .setAuthor(message.guild.name)
    .addField("Neve", message.guild.name, inline)
    .addField("ID", message.guild.id, inline)
    .addField("Tulajdonos", message.guild.owner, inline)
    .addField("Régió", message.guild.region, inline)
    .addField("Moderáció", verlvl[message.guild.verificationLevel],inline)
    .addField("Tagok", `${message.guild.memberCount}`, inline)
    .addField("Rangok", message.guild.roles.size, inline)
    .addField("Csatornák", message.guild.channels.size, inline)
    .addField("Beléptél", message.member.joinedAt)
    .setFooter(`Lypton | on.serverinfo`);

    message.channel.send(serverembed);

}

module.exports.help = {
  name:"serverinfo"
}