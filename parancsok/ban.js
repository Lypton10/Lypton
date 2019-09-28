const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(`:x: Sajnos, neked ehhez nincs jogod.`);
  let megemlítettTag = message.mentions.members.first() || message.guild.members.get(args[0]);
  let banIndok = args.slice(1).join(' ');
  if (!megemlítettTag) return message.channel.send(':worried:  ``Nem sikerült. Nem jelöltél meg senkit.`` :thinking:');
  if (!megemlítettTag.bannable) return message.channel.send(':confused: ``Nincs jogod kitiltani a(z) megemlített tagot..``');
  await megemlítettTag.ban(banIndok).catch(error => console.log('Valami neem jóó.. :confused:'));
  let tiltas = new Discord.RichEmbed()
  .addField(`Kitiltás:`,':white_check_mark: Sikeresen ki lett **tiltva** a szerverről')
  .setColor('GREEN')
  .setFooter(`Lypton | on.ban`)
  message.channel.send(tiltas);
};

module.exports.help = {
    name: "ban",
    category: "moderation",
    description: "kitiltja a(z) megemlített tagot a szerverről"
}