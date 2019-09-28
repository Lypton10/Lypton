module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage(":x: ``Nincs jogod ehhez``")

        let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if(!toMute) return message.channel.sendMessage("``Kérlek jelöld meg azt akit unmuteolni szeretnél.``");

        let role = message.guild.roles.find(r => r.name === "Némitás")
        
        if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("``Hm..Ez a felhasználó nincs le némitva``");

        await toMute.removeRole(role);
        message.channel.sendMessage("``A felhasználó sikeresen fel lett olva a némitás alól.``");

        message.delete();

     }
    
        module.exports.help = {
            name: "unmute"
        }