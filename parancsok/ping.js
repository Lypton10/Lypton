const Discord = require('discord.js');

exports.run = async (client, message, args) => { //A client, és a message definálva van, az args-al együtt
    const embed = new Discord.RichEmbed() 
     embed.addField('Pinged', client.ping);
     embed.setColor('RED')
     embed.setTitle('SpaceWar - Ping')
     embed.setFooter('Készitő: Trypal#2209')
     embed.setThumbnail(message.author.avatarURL)
    message.channel.send(embed);
  }; 

module.exports.help = {
    name: "ping",
    category: "bot",
    description: "pinged"
}