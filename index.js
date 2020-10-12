const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('dotenv').config()


client.on('ready', () => {
  console.log('Up')
})


const prefix = '!'

client.on('message', (msg) => {

  if(msg.author.bot) return
  if(!msg.content.startsWith(prefix)) return

  const commandBody = msg.content.slice(prefix.length)

  const command = commandBody.split(' ')[1]

  if(command === undefined || command === 'help'){
    msg.reply(':robot: Am knowbio bot :sunglasses: \n I help everyone to get to know each other easily and share their bio information :handshake: \n Commands: \n !knowbio add (for adding your bio information) \n !knowbio @username (for getting profile bio information)')
  } 

})

client.login(process.env.BOT_TOKEN)
