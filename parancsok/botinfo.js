const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let inline = true
    let bicon = bot.user.displayAvatarURL;
    let usersize = bot.users.size
    let chansize = bot.channels.size
    let uptimxd = bot.uptime 
    let servsize = bot.guilds.size
    let botembed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setThumbnail(bicon)
    .addField("Bot Neve", `${bot.user.username}`, inline)
    .addField("Bot Készitő", "Trypal#2209", inline )
    .addField("Szerverek", `🛡 ${servsize}`, inline)
    .addField("Csatornák", `📁 ${chansize}`, inline)
    .addField("Tagok", `${usersize}`, inline)
    .addField("Bot nyelv", "Discord.js", inline)
    .addField("Készitési idő", bot.user.createdAt)
    .setFooter(`Információk: ${bot.user.username}.`)
    .setTimestamp()
    
    message.channel.send(botembed);

}

module.exports.help = {
  name:"botinfo"
}