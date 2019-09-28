const Discord = require('discord.js');

exports.run = async (client, message, args) => {
 const embed = new Discord.RichEmbed() 
   embed.setColor('RED')
   embed.setTitle('Lypton - Invite')
   embed.addField("Bot meghívása", "Bot meghivó link: [Kattints Ide](https://discordapp.com/oauth2/authorize?client_id=617432918045884443&scope=bot&permissions=2146958847)")
   embed.addField("Lypton Support Szerver", "Support Szerver Meghivó: [Kattints Ide](https://discord.gg/DTtCj9j)")
   embed.addField("Weboldal", "Weboldal [Kattints Ide](https://lypton-weboldal.webnode.hu/)")
   embed.setFooter("Lypton | on.invite")
  message.channel.send(embed);
}; 

exports.help = {
    name: "invite",
    category: "sasadsad",
    description: "bot meghivas"
} 