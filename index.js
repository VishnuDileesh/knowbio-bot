require('dotenv').config()
const Discord = require('discord.js')
const client = new Discord.Client()
const firebase = require('firebase/app')
require('firebase/firestore')

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID
}

const app = firebase.initializeApp(firebaseConfig)

const db = app.firestore()


client.on('ready', () => {
  console.log('Up')
})



const prefix = '!'

client.on('message', (msg) => {

  if(msg.author.bot) return
  if(!msg.content.startsWith(prefix)) return

  const commandBody = msg.content.slice(prefix.length)

  const commands = commandBody.split(' ')

  const command = commands[1]

  const args = commands[2]


  if(command === undefined || command === 'help'){
    msg.reply(':robot: Am knowbio bot :sunglasses: \n I help everyone to get to know each other easily and share their bio information :handshake: \n Commands: \n !knowbio add name <name> \n !knowbio add bio <bio> \n !knowbio add link <link> \n !knowbio @username (for getting profile bio information)')
  }else if(command === 'add'){

    db.collection('profile').doc(msg.author.username).set({ username: msg.author.username }, { merge: true })


    if(args === 'name'){
      const profileName = commands.slice(3).join(' ')

      db.collection('profile').doc(msg.author.username).set({
        name: profileName
      }, { merge: true })


    }

    if(args === 'bio'){
      profileBio = commands.slice(3).join(' ')

      db.collection('profile').doc(msg.author.username).set({
        bio: profileBio
      }, { merge: true })

    }

    if(args === 'link'){
      profileLink = commands.slice(3).join(' ')

      db.collection('profile').doc(msg.author.username).set({
        link: profileLink
      }, { merge: true })

    }


  } 

})

client.login(process.env.BOT_TOKEN)
