require("dotenv").config();

const Discord = require("discord.js");
const schedule = require("node-schedule");

const client = new Discord.Client();

const channelId = "815892116135739443";

const messageDelay = 10;
const minutes = 60 - messageDelay;

const role = "<@&816040318096375868>";

function scheduleMessage(hour, eventName) {
  schedule.scheduleJob(`${minutes} ${--hour} * * *`, async () => {
    let sendedMessage;
    try {
      sendedMessage = await channel.send(`${role} ${eventName} in ${messageDelay} minutes!`);
    } catch (err) {
      console.log("Fail to get sended message", err);
      return;
    }

    setTimeout(() => {
      sendedMessage.delete();
    }, messageDelay * 60000);
  });
}

client.on("ready", async () => {
  console.log("Bot running");

  try {
    channel = await client.channels.fetch(channelId);
  } catch (err) {
    console.log("Fail to get discord channel", err);
    return;
  }

  scheduleMessage(1, "FC and DS");
  scheduleMessage(4, "FC and DS");
  scheduleMessage(7, "FC and DS");
  scheduleMessage(10, "FC and DS");
  scheduleMessage(13, "FC and DS");
  scheduleMessage(16, "FC and DS");
  scheduleMessage(19, "FC and DS");
  scheduleMessage(22, "FC and DS");

  scheduleMessage(11, "CD");
  scheduleMessage(23, "CD");

  scheduleMessage(3, "CI");
  scheduleMessage(15, "CI");

  scheduleMessage(6, "CTF");
  scheduleMessage(21, "CTF");
});

client.login(process.env.TOKEN);
