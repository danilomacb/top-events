require("dotenv").config();

const Discord = require("discord.js");
const schedule = require("node-schedule");

const client = new Discord.Client();

const channelId = "815892116135739443";
const messageDelay = 5;
const fcMessage = `FC in ${messageDelay} minutes!`;
const minutes = 60 - messageDelay;

client.on("ready", async () => {
  console.log("Bot running");

  channel = await client.channels.fetch(channelId);

  schedule.scheduleJob(`${minutes} 0 * * *`, () => {
    channel.send(fcMessage);
  });

  schedule.scheduleJob(`${minutes} 3 * * *`, () => {
    channel.send(fcMessage);
  });

  schedule.scheduleJob(`${minutes} 6 * * *`, () => {
    channel.send(fcMessage);
  });

  schedule.scheduleJob(`${minutes} 9 * * *`, () => {
    channel.send(fcMessage);
  });

  schedule.scheduleJob(`${minutes} 12 * * *`, () => {
    channel.send(fcMessage);
  });

  schedule.scheduleJob(`${minutes} 15 * * *`, () => {
    channel.send(fcMessage);
  });

  schedule.scheduleJob(`${minutes} 18 * * *`, () => {
    channel.send(fcMessage);
  });

  schedule.scheduleJob(`${minutes} 21 * * *`, () => {
    channel.send(fcMessage);
  });
});

client.login(process.env.TOKEN);
