let fetch = require('node-fetch')
let handler = async (m, {conn, text}) => {
if (!text) throw `Masukkan Text.`
let res = await fetch(`https://xteam.xyz/shorturl/bitly?url=${text}&APIKEY=HIRO`)
let oi = await res.json()
let json = oi.result
let teks = `Hasil : ${json.link}`
await m.reply(teks)
}
handler.help = ['bitly']
handler.tags = ['short']
handler.command = /^(bitly)$/i

module.exports = handler
