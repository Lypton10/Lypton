const Discord = require("discord.js");

module.exports.run =async (bot, message, args) => {
    let inline = true
    let resence = true
    const status = {
        online: "Elérhető",
        idle: "Tétlen",
        dnd: "Ne Zavarj",
        offline: "Nem elérhető/Láthatatlan"
      }
        
const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
let target = message.mentions.users.first() || message.author

if (member.user.bot === true) {
    bot = "Igen";
  } else {
    bot = "Nem";
  }

            let embed = new Discord.RichEmbed()
                //.setAuthor(member.user.username)
                .setThumbnail((target.displayAvatarURL))
                .setColor("#00ff00")
                .addField("Discord Neve", `${member.user.tag}`, inline)
                .addField("ID", member.user.id, inline)
                .addField("Becenév", `${member.nickname !== null ? `Beceneve: ${member.nickname}` : "Nincs"}`, true)
                .addField("Bot", `${bot}`,inline, true)
                .addField("Státusz", `${status[member.user.presence.status]}`, inline, true)
                .addField("Játékban", `${member.user.presence.game ? `🎮 ${member.user.presence.game.name}` : "Nem játszig jelenleg semmivel"}`,inline, true)
                .addField("Rangok", `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "Nincs rangja"}`, true)
                .addField("Belépett", member.user.createdAt)
                .setFooter(`Információk: ${member.user.username}`)
                .setTimestamp()
    
            message.channel.send(embed);
    }
