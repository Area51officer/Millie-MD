let handler = async (m, {conn}) => {
  conn.sendTBI(m.chat, `𝚃𝚑𝚊𝚗𝚔𝚜 𝚏𝚘𝚛 𝚢𝚘𝚞𝚛 𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝 𝚒𝚗 𝚞𝚜𝚒𝚗𝚐 𝚘𝚞𝚛 𝚙𝚛𝚘𝚓𝚎𝚌𝚝 𝚋𝚞𝚝 𝚞𝚗𝚏𝚘𝚛𝚝𝚞𝚗𝚊𝚝𝚎𝚕𝚢 𝚝𝚑𝚒𝚜 𝚙𝚛𝚘𝚓𝚎𝚌𝚝 𝚒𝚜 𝚜𝚝𝚒𝚕𝚕 𝚞𝚗𝚍𝚎𝚛 𝚍𝚎𝚟𝚎𝚕𝚘𝚙𝚖𝚎𝚗𝚝.`, wm, 'https://raw.githubusercontent.com/Neeraj-x0/Millie/main/Millie/millie.jpg', `𝙶𝚒𝚝𝙷𝚞𝚋`, `https://github.com/Neeraj-x0/Millie-MD`, null, null, '𝙼𝚎𝚗𝚞', `.menu`, null, null, null, null, m) 
}
handler.help = ['sᴏᴜʀᴄᴇᴄᴏᴅᴇ','ɢɪᴛ']
handler.tags = ['info']
handler.command = /^(sc(ript(bot)?)?|sourcecode|git)$/i

module.exports = handler


