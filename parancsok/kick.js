const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(`:x: Sajnos, neked ezt nem lehet.`);
  let megemlítettTag = message.mentions.members.first() || message.guild.members.get(args[0]);
  let kickIndok = args.slice(1).join(' ');
  if (!megemlítettTag) return message.channel.send(':worried:  ``Nem sikerült. Nem jelöltél meg senkit.`` :thinking:');
  if (!megemlítettTag.kickable) return message.channel.send(':confused: ``Nincs jogod kitiltani a(z) megemlített tagot..``');
  await megemlítettTag.kick(kickIndok).catch(error => console.log('Valami neem jóó.. :confused:'));
  let tiltas = new Discord.RichEmbed()
  .addField(`Kirúgás:`,':white_check_mark: Sikeresen ki lett **rúgva** a szerverről')
  .setColor('GREEN')
  .setFooter('Lypton | on.kick')
  message.channel.send(tiltas);
};

module.exports.help = {
    name: "kick",
    category: "moderation",
    description: "kirúgja a(z) megemlített tagot a szerverről"
}	