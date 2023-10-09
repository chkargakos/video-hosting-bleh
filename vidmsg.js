const Discord = require("discord.js");
const bot = new Discord.Client();
const db = require("quick.db");

const lastNum = db.fetch("latestNum");
const file = db.fetch(`${lastNum}_fname`);

bot.on("ready", async () => {
   const channel = await bot.guilds.cache.get("644551231020204062").channels.cache.get("980517470446157844");
   const users = ["604189156490346496", "245941955048112128"];
   
   for (i in users) {
	var user = await bot.users.fetch(users[i]);	
	user.send("new video uploaded: http://92.42.46.150:8080/videos?v=" + file);
 }

   channel.send("<@&980519111966752808>" + "\n new video uploaded: http://92.42.46.150:8080/videos?v=" + file).then(() => { process.kill(0); });
});

bot.login("NzY2Nzg2NzQwOTU0MjAyMTUz.X4obzQ.5NIbSxAfibfxSMzKICZDzr6N5zg");
