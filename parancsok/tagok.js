const Discord = module.require('discord.js');

exports.run = async (client, message, args) => {
  message.channel.send(`:zap: Jelenlegi játékos szám: ${client.users.size} :tada:`);
};

module.exports.help = {
    name: "tagok",
    category: "bot",
    description: "megmutatja hogy mennyi játékos van a jelenlegi szerveren.."
} 