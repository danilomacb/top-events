require("dotenv").config();

const Discord = require("discord.js");
const schedule = require("node-schedule");

const client = new Discord.Client();

const channelId = "815892116135739443";

const messageDelay = 10;
const minutes = 60 - messageDelay;

const role = "<@&816040318096375868>";

function scheduleMessage(hour, dayOfWeek, eventName) {
  schedule.scheduleJob(`${minutes} ${--hour} * * ${dayOfWeek}`, async () => {
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

  scheduleMessage(1, "*", "FC and DS");
  scheduleMessage(4, "*", "FC and DS");
  scheduleMessage(7, "*", "FC and DS");
  scheduleMessage(10, "*", "FC and DS");
  scheduleMessage(13, "*", "FC and DS");
  scheduleMessage(16, "*", "FC and DS");
  scheduleMessage(19, "*", "FC and DS");
  scheduleMessage(22, "*", "FC and DS");

  scheduleMessage(9, "*", "CD");
  scheduleMessage(17, "*", "CD");
  scheduleMessage(23, "*", "CD");

  scheduleMessage(3, "*", "CI");
  scheduleMessage(15, "*", "CI");

  scheduleMessage(12, "*", "CTF");
  scheduleMessage(21, "*", "CTF");

  scheduleMessage(0, "*", "CA");
  scheduleMessage(9, "*", "CA");
  scheduleMessage(17, "*", "CA");

  scheduleMessage(0, "*", "DW");
  scheduleMessage(4, "*", "DW");
  scheduleMessage(8, "*", "DW");
  scheduleMessage(12, "*", "DW");
  scheduleMessage(16, "*", "DW");
  scheduleMessage(20, "*", "DW");

  scheduleMessage(13, 2, "SW");
  scheduleMessage(13, 4, "SW");
  scheduleMessage(13, 6, "SW");
});

client.login(process.env.TOKEN);
