const Discord = require('discord.js');


exports.run = async (client, message, args) => {
let text = args.slice(0).join(" ");
 const embed = new Discord.RichEmbed() 
   embed.setColor('RED')
   embed.setTitle('Embed Szöveg')
   embed.setFooter(`Üzenetet kérte: ${message.author.username}`)
   embed.setDescription(text);
  message.channel.send(embed);
}; 

exports.help = {
    name: "embsay",
} 