const Discord = module.require('discord.js');

exports.run = async (client, message, args) => {
  message.channel.send(`:zap: Jelenleg a bot ennyi szerveren van bent: ***${client.guilds.size}*** `);
};

module.exports.help = {
    name: "tagok",
    category: "bot",
    description: "megmutatja hogy mennyi játékos van a jelenlegi szerveren.."
} 