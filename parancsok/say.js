module.exports.run = async (bot, message, args, client) => {

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:x: Ehhez nincs jogod.`)
    
    if(message.author.id === "448410421339095041") return
    if(message.author.id === "485494651835383828") return
    
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);

}

module.exports.help = {
    name: "say"
}