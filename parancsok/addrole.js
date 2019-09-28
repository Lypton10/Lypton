const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!addrole <@user> <Role>
  if(args[0] == "help"){
    let helpembxd = new Discord.RichEmbed()
    .setColor("#00ff00")
    .addField("Addrole Command", "Usage: !addrole <@user> <role>")

    message.channel.send(helpembxd);
    return;
  } 

  let xdemb = new Discord.RichEmbed()
  .setColor("#00ff00")
  .setTitle(`Rang hozzá adás`)
  .addField("Lényeg:", "Hozzá adja a leírt rangot a megemlitett tagnak.", true)
  .addField("Használat", "on.addrole [@user] [rang]", true)
  .addField("Példa", "on.addrole @Trypal Fejlesztő")

  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("``Neked nincs jogod ehhez``");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send(xdemb);

  let role = args.join(" ").slice(22);
  if(!role) return message.channel.send(":thinking: ``Használat: on.addrole (@user) (rang) <-- (@ nélkül)``");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.channel.send("``Ezt a rangot nem találtam, ellenőrizd hogy biztos jól irtad-e a nevét.``");

  if(rMember.roles.has(gRole.id)) return message.channel.send("Ezen a tagon már rajta van a leírt rang.");
  await(rMember.addRole(gRole.id));

    await message.channel.send(`:tada: ***Sikeresen hozzá adtam*** ${rMember.user.username} ***felhasználohoz*** ${gRole.name} ***rangot!***`)


  
}

module.exports.help = {
  name: "addrole",
  description: 'Add role to someone',
  usage: 'addrole <@user> <Role>'
}