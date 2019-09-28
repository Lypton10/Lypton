const Discord = module.require('discord.js');

exports.run = async (client, message, args) => { 
  const embed = new Discord.RichEmbed() 
   embed.setColor('RED')
   embed.addField(":eyes: Parancsok:", "[Kattints Ide](https://lypton-weboldal.webnode.hu/kapcsolat/) :eyes:")
   message.channel.send(embed);
}; 