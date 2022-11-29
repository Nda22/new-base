let fs = require('fs')
const moment = require('moment-timezone')

let flaaa = JSON.parse(fs.readFileSync('./api/fla.json'))
let waifu = JSON.parse(fs.readFileSync('./api/waifu.json'))
let data = JSON.parse(fs.readFileSync('./data.json'))


global.owner = JSON.parse(fs.readFileSync('./settings/owner.json')) // Put your number to folder /src/owner.json
global.mods = JSON.parse(fs.readFileSync('./settings/moderator.json')) // Want some help?

global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  lol: 'https://api.lolhuman.xyz',
  adicug: 'https://api.adiofficial.xyz',
  males: 'https://malesin.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://api.xteam.xyz': 'apikeyaine',
  'https://melcanz.com': 'apikeylu',
  'https://api.lolhuman.xyz': 'apikeylu',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apikeyaine',
  'https://pencarikode.xyz': 'apikeylu',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'apikeylu',
  'https://api.adiofficial.xyz': 'apikey lu'
}

global.wait = '_*𝐬𝐞𝐝𝐚𝐧𝐠  𝐝𝐢 𝐩𝐫𝐨𝐬𝐞𝐬 ...*_'
global.eror = '_*мααƒ ѕєяνєя тι∂αк ѕтαвιℓ..*_'
global.Intervalmsg = 1800 //detik
global.sukses = 'Done, By NdaaBotz'
global.thumb = `https://telegra.ph/file/623b278729f9d918356a9.jpg`

//========Url Template Buttons=========//
global.dtu = 'ɪɴꜱᴛᴀɢʀᴀᴍ'
global.urlnya = "https://www.instagram.com/NdaaBotz"

//============= callButtons =============//
global.dtc = 'ᴄᴀʟʟ ᴏᴡɴᴇʀ'
global.phn = '+62 882-3992-8939'

//============= Games ================//
global.benar = '_*Benar✅*_'
global.salah = '_*Salah❌*_'
global.dikit = "dikit lagi, semangat ya :')"

global.multiplier = 100 // The higher, The harder levelup

// Sticker WM
global.packname = 'NdaaBotz-MD'
global.author = '6288983305197'
//Nama bot/wm
global.wm = 'Join Us https://chat.whatsapp.com/GdO4OEZ9L09KGXEGXzIKAI\nNdaaBotz-MD'
global.snh = 'github.com/NdaaaXyz'
global.gcb = 'https://chat.whatsapp.com/GdO4OEZ9L09KGXEGXzIKAI'
global.gcb2 = 'https://chat.whatsapp.com/FWm4r5OMVLjEAQy0ZkkD0C'
global.community = 'https://chat.whatsapp.com/H7rsDqgE6scIWzAfj1CLQ1'
//link
global.sig = 'https://www.instagram.com/notifikasi_pemberitahuan'

global.sgh = 'https://www.github.com/AyGemuy'

global.sgc = 'https://chat.whatsapp.com/BAs2c2UeLE8AaI806UWUvI'

global.sdc = 'https://www.discord.com/wudysoft'

global.snh = 'https://www.tiktok.com/@upload_file'

global.sfb = 'https://www.facebook.com/'

global.syt = 'https://www.youtube.com/'
/*Fake*/

global.fsizedoc = '1'.repeat(10)

global.fpagedoc = '1'.repeat(10)
global.htki = '––––––『' // Hiasan Titile (KIRI)
global.htka = '』––––––' // Hiasan Title  (KANAN)
global.lopr = 'Ⓟ' //LOGO PREMIUM ON MENU.JS
global.lolm = 'Ⓛ' //LOGO FREE ON MENU.JS
global.htjava = '𔔮'   //hiasan Doang :v
global.hsquere = ['⛶','❏','⫹⫺']


global.thumbdoc = 'https://telegra.ph/file/6e45318d7c76f57e4a8bd.jpg'
global.botdate = `⫹⫺ Date :  ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}`
//=========== Requirements ==========//  
        global.colong1 = 'Ciss 📸'
        global.colong2 = 'ʙy Ndaa'
global.img = pickRandom(waifu)
global.fla = pickRandom(flaaa)

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🧬',
      limit: '🌌',
      healt: '❤️',
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      bgl: '💎',
      gems: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      fishingrod: '🎣',
      pickaxe: '⛏️',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      iron: '⛓️',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      makananpet: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
