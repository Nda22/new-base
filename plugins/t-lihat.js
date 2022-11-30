let handler = async (m, { conn }) => {
 let adReply = {
externalAdReply: {
renderLargerThumbnail: true,
mediaType: 1,
title: wm,
thumbnail: await m.quoted.download()
}
}

await conn.reply(m.chat, 'Preview Media Jika Kamu Malas Download', m, { contextInfo: adReply })
}
handler.command = /^(lihat)$/i

module.exports = handler
