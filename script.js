document.getElementById("open-widget-button").addEventListener("click", function() {
	window.open("https://discord.com/widget?id=967662653000519690&theme=dark", "_blank");
});

const Discord = require(`discord.js`);
const client = new Discord.Client({ intents: [`GUILDS`, `GUILD_MESSAGES`] });

client.on(`ready`, async () => {
	client.channels.cache.get(`1067792897669337088`).send(`Website is ready.`)
});

client.login(process.env.TOKEN);