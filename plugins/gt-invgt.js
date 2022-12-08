let handler = async (m, { conn, usedPrefix }) => {
    let member = global.db.data.users[m.sender]
    let healt = member.healt
    let bgl = member.bgl
    let dl = member.dl
    let wl = member.wl
    let lbot = member.lbot
    let lwing = member.lwing
    let lorb = member.lorb
    let lkatana = member.lkatana
    let gems = member.gems
    let pickaxe = member.pickaxe
    let sword = member.sword
    let armor = member.armor
    let fishingrod = member.fishingrod

    let warn = member.warn

    let pet = member.pet
    let kucing = member.kucing
    let _kucing = member.anakkucing
    let rubah = member.rubah
    let _rubah = member.anakrubah
    let kuda = member.kuda
    let _kuda = member.anakkuda
    let anjing = member.anjing
    let _anjing = member.anakanjing

    let diamond = member.diamond
    let potion = member.potion
    let common = member.common
    let makananpet = member.makananpet
    let iron = member.iron
    let batu = member.batu
    let kayu = member.kayu
    let string = member.string

    let uncommon = member.uncommon
    let mythic = member.mythic
    let legendary = member.legendary
    let level = member.level
    let money = member.money
    let exp = member.exp
    let sampah = member.sampah


    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

    let sortedmoney = Object.entries(global.db.data.users).sort((a, b) => b[1].money - a[1].money)
    let sortedlevel = Object.entries(global.db.data.users).sort((a, b) => b[1].level - a[1].level)
    let sorteddiamond = Object.entries(global.db.data.users).sort((a, b) => b[1].diamond - a[1].diamond)
    let sortedpotion = Object.entries(global.db.data.users).sort((a, b) => b[1].potion - a[1].potion)
    let sortedsampah = Object.entries(global.db.data.users).sort((a, b) => b[1].sampah - a[1].sampah)
    let sortedmakananpet = Object.entries(global.db.data.users).sort((a, b) => b[1].makananpet - a[1].makananpet)
    let sortedbatu = Object.entries(global.db.data.users).sort((a, b) => b[1].batu - a[1].batu)
    let sortediron = Object.entries(global.db.data.users).sort((a, b) => b[1].iron - a[1].iron)
    let sortedkayu = Object.entries(global.db.data.users).sort((a, b) => b[1].kayu - a[1].kayu)
    let sortedstring = Object.entries(global.db.data.users).sort((a, b) => b[1].string - a[1].string)
    let sortedcommon = Object.entries(global.db.data.users).sort((a, b) => b[1].common - a[1].common)
    let sorteduncommon = Object.entries(global.db.data.users).sort((a, b) => b[1].uncommon - a[1].uncommon)
    let sortedmythic = Object.entries(global.db.data.users).sort((a, b) => b[1].mythic - a[1].mythic)
    let sortedlegendary = Object.entries(global.db.data.users).sort((a, b) => b[1].legendary - a[1].legendary)
    let sortedpet = Object.entries(global.db.data.users).sort((a, b) => b[1].pet - a[1].pet)
    let usersmoney = sortedmoney.map(v => v[0])
    let userslevel = sortedlevel.map(v => v[0])
    let usersdiamond = sorteddiamond.map(v => v[0])
    let userspotion = sortedpotion.map(v => v[0])
    let userssampah = sortedsampah.map(v => v[0])
    let usersmakananpet = sortedmakananpet.map(v => v[0])
    let usersbatu = sortedbatu.map(v => v[0])
    let usersiron = sortediron.map(v => v[0])
    let userskayu = sortedkayu.map(v => v[0])
    let usersstring = sortedstring.map(v => v[0])
    let userscommon = sortedcommon.map(v => v[0])
    let usersuncommon = sorteduncommon.map(v => v[0])
    let usersmythic = sortedmythic.map(v => v[0])
    let userslegendary = sortedlegendary.map(v => v[0])
    let userspet = sortedpet.map(v => v[0])

    let str = `
Inventory Growtopia *${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])}*\n
     - Ur Lock -
Blue Gem Lock: *${bgl}*
Diamond Lock: *${dl}*
World Lock: *${wl}*
Gems: *${gems}*

   - Ur Legendary Items -

Legendary Bot: *${lbot}*
Legendary Wings: *${lwing}*
Legendary Orb: *${lorb}*
 Legendary Katana: *${lkatana}*
`.trim()
    conn.reply(m.chat, str, m)
}
handler.help = ['inventorygt', 'invgt']
handler.tags = ['gt']
handler.command = /^(invgt|inventorygt)$/i
handler.register = false
module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
