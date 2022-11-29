let handler = async (m, { conn }) => {

    let hit = Object.entries(global.db.data.stats).length

    conn.reply(m.chat, `Total Hit Hari Ini : ${hit}`, fkontak)

}

handler.help = ['totalhit']

handler.tags = ['info']

handler.command = /^(totalhit)$/i

module.exports = handler