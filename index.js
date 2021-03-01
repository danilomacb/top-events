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

  schedule.scheduleJob(`${minutes} 1 * * *`, () => {
    channel.send(fcMessage);
  });

  schedule.scheduleJob(`${minutes} 4 * * *`, () => {
    channel.send(fcMessage);
  });

  schedule.scheduleJob(`${minutes} 7 * * *`, () => {
    channel.send(fcMessage);
  });

  schedule.scheduleJob(`${minutes} 10 * * *`, () => {
    channel.send(fcMessage);
  });

  schedule.scheduleJob(`${minutes} 13 * * *`, () => {
    channel.send(fcMessage);
  });

  schedule.scheduleJob(`${minutes} 16 * * *`, () => {
    channel.send(fcMessage);
  });

  schedule.scheduleJob(`${minutes} 19 * * *`, () => {
    channel.send(fcMessage);
  });

  schedule.scheduleJob(`${minutes} 22 * * *`, () => {
    channel.send(fcMessage);
  });
});

client.login(process.env.TOKEN);
