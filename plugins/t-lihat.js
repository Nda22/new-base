let handler = async (m, { conn }) => {
 let adReply = {
externalAdReply: {
renderLargerThumbnail: true,
mediaType: 1,
title: 'NdaaBotz-MD',
thumbnail: await m.quoted.download()
}
}

await conn.reply(m.chat, 'Preview Media Jika Kamu Malas Download', m, { contextInfo: adReply })
}
handler.tags = ['tools']
handler.help = ['lihat']
handler.command = /^(lihat)$/i

module.exports = handler
