const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, args, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name = conn.getName(m.sender)
  if (user.registered === true) throw `Kamu sudah terdaftar\nMau daftar ulang? ${usedPrefix}unreg <SERIAL NUMBER>`
  /*if (!Reg.test(text)) throw `contoh:\n*${usedPrefix + command} Nama|Email|Umur*`*/
  let urut = text.split`|`

  let text0 = urut[0]

  let text1 = urut[1]

  let text2 = urut[2]
  if (!text0) throw 'Penggunaan salah!\n\ncontoh /daftar Nama|email|umur'
  if (!text1) throw 'Penggunaan salah!\n\ncontoh /daftar Nama|email|umur'
  if (!text2) throw 'Penggunaan salah!\n\ncontoh /daftar Nama|email|umur'
  /*age = parseInt(age)
  if (age > 50) throw 'Umur terlalu tua'
  if (age < 5) throw 'Bayi bisa ngetik sesuai format bjir ._., tapi gatau juga bocil skrg epic² pasti anak ngen ngep:v'*/
  user.name = text0
  user.email = text1
  user.age = text2
  user.regTime = + new Date
  user.registered = true
  let prefix = usedPrefix
  let sn = createHash('md5').update(m.sender).digest('hex')
  conn.sendButton(m.chat, `
┌─「 *daftar berhasil* 」
├ Nama: ${text0}
├ Email: ${text1}
├ Umur: ${text2} Tahun
└────  

*SN* (Serial Number) di kirim di chat pribadi dan digunakan untuk daftar ulang, jika lupa *SN* silahkan ketik *${usedPrefix}sn* untuk mengecek *SN* kamu! 
`.trim(), wm, `Profile`,`${prefix}pp`, m) 
conn.sendMessage(m.sender, {text: `*SN:* ${sn}`}, m)
conn.send2Button(m.sender, `Welcome To NdaaBotzzz ${name} Semoga Betah!`, wm, 'Group BOT', '/gcbot', 'Owner BOT', '.owner', fkontak)
}
handler.help = ['daftar', 'register'].map(v => v + ' <email>.<age>')
handler.tags = ['xp']

handler.command = /^(daftar|reg(is(ter))?)$/i

module.exports = handler