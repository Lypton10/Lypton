const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    const user = message.mentions.users.first() || message.author;
    const avatar = new Discord.RichEmbed()
        avatar.setColor('RANDOM');
        avatar.setAuthor('😋 Profilkép:' + ' ' + user.tag + '');
        avatar.setFooter('📋 Kérte:' + ' ' + message.author.tag);
        avatar.setImage(user.avatarURL);
    message.channel.send(avatar);
};

exports.help = {
    name: "avatar",
    category: "fun/moderation",
    description: "queries the avatar"
}

