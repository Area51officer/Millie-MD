let handler = async (m, {conn}) => {
  conn.sendTBI(m.chat, `ππππππ πππ π’πππ ππππππππ ππ πππππ πππ πππππππ πππ πππππππππππππ’ ππππ πππππππ ππ πππππ πππππ πππππππππππ.`, wm, 'https://raw.githubusercontent.com/Neeraj-x0/Millie/main/Millie/millie.jpg', `πΆπππ·ππ`, `https://github.com/Neeraj-x0/Millie-MD`, null, null, 'πΌπππ', `.menu`, null, null, null, null, m) 
}
handler.help = ['sα΄α΄Κα΄α΄α΄α΄α΄α΄','Ι’Ιͺα΄']
handler.tags = ['info']
handler.command = /^(sc(ript(bot)?)?|sourcecode|git)$/i

module.exports = handler


