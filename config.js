const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "FAIZAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNERKMjBwWnNCZG1NNVBKM0paTWZZZnMzRXhON3JBT2NLaWR6V0tZVE1rVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSmdObk4weDNFSG52L1ErcSs1R1ZsaEovWk9lcm9nMlphbkJ5QjBCMnJWOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4QWFoZkFOUlNxMnZDWERuVlVaN25EZ0dRbGgyVWpoTUhRNWxEQzUxcDEwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJudk5qQytob3hpSzM2NU1rektlcWlkMDhzR0hpaHVLa2tPR2VmOEYxVVJVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBPZ3VMWWpwZ21sT256Zy9ZZEx1WndVTjM1dk1mbXFLT3NnT2pYcTdLbEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjIyTHRscW43TEtRdzd2KzZSU1BpMHBueHVFbkxNUEpzT0lNcElralhBRkU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUI4UTcwMTFlZEZKUHF5cGdjOFFEYkwxSTI4WHQ2MFVoSW82dUZXWDUyUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZWIrOHdUUlRVK2lscDM2TFJEdWhoekVtTkpLdkRUKytZa2U2OXFuWC8yMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRMTlVnblZRTkJVSG1YWXhwbmQvVkduSnZkaUJGVGlEbVU1ODhWZ2d4aDlNTko5L0VmenIyM1RvcWJ3NEpkRDVFenNxQ1dZWnBibXZoRTRnNmxIS0FRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU3LCJhZHZTZWNyZXRLZXkiOiJJU3FMUWVrK0Z1NUtmQ2kxRDBJNVB0akp1VjJrVTZTQllGblRaandXb21nPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzA4NjY4NzQ0MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzE0M0YyODNENkE5MkZGOEFGODdDM0REMDk0MTlFOCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzc3MzgxMzk0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMwODY2ODc0NDBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUM1QjcyRUEzMUVENkIxMTFGQTIyQzIwRkQ5MTgxRjMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3NzM4MTM5NX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMDg2Njg3NDQwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDQjg2MzBGMzc4RjlDNjcwQUE3RUQwRjFGMjUxNzBGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NzczODEzOTZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzA4NjY4NzQ0MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzg3MEIzN0JCNTJDMUY4OUQxMzRCMTdBM0Q1NUQwNyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzc3MzgxMzk4fV0sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkZBSVpBTk1EIiwibWUiOnsiaWQiOiI5MjMwODY2ODc0NDA6NUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjI3MzA4MzA5NzE1MzY0Njo1QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTXFLdXA4SEVJSGd3czhHR0FVZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMWxaK0xpRjJJdDZ4TU9ZWU1xcjZ4dnB2Sm93WDVWS282eEpUcUJtMHBFRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiK1puSlQwQnpBUjl4eDIyOVN0TDZQa1pGOWhJNXZYVVp5SUpVcE1vVFBFendxYUJGSVRRUjFWT0FSc0N2d0NYR0sxTFpnNit5RjhMMTFWTy9BeDJlQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6Ik9VM21EMmVwZExNQ1VOVkdPSWR2RmlWRElaMnYzLytWekRuQytsZDVWOXRNWUg3Z2txc1p2NDVTODI1YzJOZllzZXEvREZVdDBsOGY0TkZGSjBuZ0RnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMDg2Njg3NDQwOjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZFpXZmk0aGRpTGVzVERtR0RLcStzYjZieWFNRitWU3FPc1NVNmdadEtSQiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FNSUNBZ1MifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzc3MzgxMzkxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFaeSJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𝐅αɪᴢαɴ-𝐌ᴅ⎯꯭̽ 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/ejufwa.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "*𝐅αɪᴢαɴ-𝐌ᴅ⎯꯭̽*",
// add bot name here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "> *𝐏σωєяє∂ 𝐁у 𝐅αɪᴢαɴ-𝐌ᴅ⎯꯭̽*",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "🪄,💖,💗,❤️‍🩹,🫀,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923266105873",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*𝐅αɪᴢαɴ-𝐌ᴅ⎯꯭̽*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "> *𝐏σωєяє∂ 𝐁у 𝐅αɪᴢαɴ-𝐌ᴅ⎯꯭̽🩷*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/ejufwa.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*𝐅αɪᴢαɴ-𝐌ᴅ⎯꯭̽*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923266105873",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
