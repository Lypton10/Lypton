exports.run = function (bot, msg, args) {
    if (args.length < 1) {
        throw '``Használat: on.fordit (szó/mondat)``';
    }
    msg.reply(args.join(' ').split('').reverse().join(''));


}

module.exports.help = {
  name: "reverse"
}