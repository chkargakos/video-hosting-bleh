const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", async() => {
    const channel = await bot.guilds.cache.get("644551231020204062").channels.cache.get("980517470446157844");
    const user = await bot.users.fetch("604189156490346496").catch(console.error);
    user.send("new audio uploaded: http://92.42.46.150:8080/audio");
    channel.send("<@&980519111966752808>" + "\n new audio uploaded: http://92.42.46.150:8080/audio").then(() => { process.kill(0); });
});

bot.login("NzY2Nzg2NzQwOTU0MjAyMTUz.X4obzQ.5NIbSxAfibfxSMzKICZDzr6N5zg");