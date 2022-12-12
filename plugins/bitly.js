let fetch = require('node-fetch')
let handler = async (m, {conn, text}) => {
let res = await fetch(`https://xteam.xyz/shorturl/bitly?url=${text}&APIKEY=HIRO`)
let oi = await res.json()
let json = oi.result
let teks = `Created At : ${json.created_at}\nHasil : ${json.link}`
await m.reply(teks)
}
handler.help = ['bitly']
handler.tags = ['short']
handler.command = /^(bitly)$/i

module.exports = handler
