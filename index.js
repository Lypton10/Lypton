const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");


client.on('ready', () => {
  console.log(`Bejelentkezve..`);
  client.user.setPresence({ game: { name: `Parancsok: on.help`, type: 'LISTENING' }, status: 'online' });
});


client.on('message', async (message) => {
    if (message.author.bot) return;
    if (message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    try {
      let commandFile = require(`./parancsok/${command}.js`);
      commandFile.run(client, message, args);
    } catch (err) {
   }
  });

  
client.login('NjE3NDMyOTE4MDQ1ODg0NDQz.XXK1DA.1izdkDCu61Mqd7SN_s1mYVBwt6U');  


  