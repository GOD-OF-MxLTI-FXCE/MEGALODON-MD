const { getConfig } = require("./lib/configdb");
const fs = require('fs');
const path = require('path');

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "MEGALODON~MD~7UcmRAKY#J4ypz_d8SsONnfmHaOUZXtsbhNxE6BJZFeVLpxPWU-g",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*sᴛᴀᴛᴜs sᴜᴄᴄᴇssғᴜʟʟʏ ᴠɪᴇᴡᴇᴅ ʙʏ ᴍᴇɢᴀʟᴏᴅᴏɴ-ᴍᴅ*",
// set the auto reply massage on status reply  
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
MENU_IMAGE_URL: getConfig("MENU_IMAGE_URL") || "https://files.catbox.moe/2ozipw.jpg" ,
// add custom menu and mention reply image url
PREFIX: getConfig("PREFIX") || ".", 
// add your prifix for bot   
OWNER_NAME: getConfig("OWNER_NAME") || "𝗠𝗿᭄𝙺eutly🌀』",
// add bot owner name
CHATBOT: getConfig("CHATBOT") || "on", 
//chatbot on/off
BOT_NAME: process.env.BOT_NAME || "MEGALODON-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "𝗠𝗿᭄𝙺eutly🌀』",
    
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "2250788145722",
// add your bot owner number
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words 
ANTI_BOT: process.env.ANTI_BOT || "true",
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "true",
// make anti link true,false for groups 
ANTIVIEW_ONCE: process.env.ANTIVIEW_ONCE || "false",
ANTILINK_WARN: process.env.ANTILINK_WARN || "false",
ANTILINK_KICK: process.env.ANTILINK_KICK || "false",
ANTILINK: process.env.ANTILINK || "false",

ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "50948336180",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'inbox' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "true"
// make it true for auto recoding 
};
