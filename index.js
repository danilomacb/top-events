require("dotenv").config();

const Discord = require("discord.js");
const schedule = require("node-schedule");

const client = new Discord.Client();

client.on("ready", async () => {
  console.log("Bot running");

  channel = await client.channels.fetch("800792617091727380");

  schedule.scheduleJob("55 1 * * *", () => {
    channel.send("@everyone FC in 5 minutes!");
  });

  schedule.scheduleJob("55 4 * * *", () => {
    channel.send("@everyone FC in 5 minutes!");
  });

  schedule.scheduleJob("55 7 * * *", () => {
    channel.send("@everyone FC in 5 minutes!");
  });

  schedule.scheduleJob("55 10 * * *", () => {
    channel.send("@everyone FC in 5 minutes!");
  });

  schedule.scheduleJob("55 13 * * *", () => {
    channel.send("@everyone FC in 5 minutes!");
  });

  schedule.scheduleJob("55 16 * * *", () => {
    channel.send("@everyone FC in 5 minutes!");
  });

  schedule.scheduleJob("55 19 * * *", () => {
    channel.send("@everyone FC in 5 minutes!");
  });

  schedule.scheduleJob("55 22 * * *", () => {
    channel.send("@everyone FC in 5 minutes!");
  });
});

client.login(process.env.TOKEN);
