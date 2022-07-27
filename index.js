const { Client, Collection } = require('discord.js');
const { TOKEN, PREFIX } = require('./config.json');
const fs = require('fs')
const client = new Client({
    intents: 32767
});

const welcome = require ('./Commands/Info/welcome.js');
const goodbye = require ('./Commands/Info/goodbye.js');
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./Commands");
client.buttons = new Collection();
client.events = new Collection();
client.slashCommands = new Collection();

module.exports = client;

["Command", "Event", "Slash", "Button"].forEach(handler => {
  require(`./Structures/${handler}`)(client);
});

client.once('ready', () => {
  console.log(`[READY] ${client.user.tag} is ready`)
  welcome(client)
  goodbye(client)
})

process.on('unhandledRejection', err => {
  console.log(`[ERROR] Unhandled promise rejection: ${err.message}.`);
  console.log(err);
});

client.login(TOKEN);