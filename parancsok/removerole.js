const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help"){
    let helpembxd = new Discord.RichEmbed()
    .setColor("#00ff00")
    .addField("Rang eltávoltitás", "Használat: !removerole <@user> <rang>")

    message.channel.send(helpembxd);
    return;
  } 

  let xdemb = new Discord.RichEmbed()
  .setColor("#00ff00")
  .setTitle(`Rang eltávolitás`)
  .addField("Lényeg:", "Eltávolitja a megemlitett embertől a leírt rangot", true)
  .addField("Használat", "on.removerole [@user] [rang]", true)
  .addField("Példa", "on.removerole @Trypal Fejlesztő")

  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("``Neked nincs jogod ehhez``");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send(xdemb);

  let role = args.join(" ").slice(22);

  if(!role) return message.channel.send(":thinking: ``Használat: on.removerole(@user) (rang) <-- (@ nélkül)``");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.channel.send("``Ezt a rangot nem találtam, ellenőrizd hogy biztos jól irtad-e a nevét.``");

  if(!rMember.roles.has(gRole.id)) return message.channel.send("Nincs rajta a megadott rang.");
  await(rMember.removeRole(gRole.id));

  await message.channel.send(`***:tada: Sikeresen eltávolitottam*** ${rMember.user.username}*** felhasználotól a ***${gRole.name}*** rangot!***`)

}

module.exports.help = {
  name: "removerole"
}