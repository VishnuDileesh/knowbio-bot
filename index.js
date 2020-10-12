const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('dotenv').config()


client.on('ready', () => {
  console.log('Up')
})





client.login(process.env.BOT_TOKEN)
