const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!mute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.channel.send("``Kérlek jelöld meg azt akit le szeretnél némitani``");
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: ``Nincs jogod ehhez``");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.channel.send("``Hűhaa, őt nem lehet lenémitani``");
  if (tomute.id === message.author.id) return message.channel.send("``Komolyan magadat akarod némitani? Nem lehet.``");
  let muterole = message.guild.roles.find(`name`, "Némitás");

  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Némitás",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }

  let mutetime = args[1];
  if(!mutetime) return message.channel.send("``Kérlek adj meg egy időt hogy meddig legyen némitva``");

  await(tomute.addRole(muterole.id));
  message.channel.send(`<@${tomute.id}> ***le lett némitva.Ennyi időre:*** ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> ***fel lett oldva a némitás alól.***`);
  }, ms(mutetime));

  message.delete();

}

module.exports.help = {
  name: "mute"
}