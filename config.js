const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923xxx Your Number";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_45_09_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODcsXG4gICAgICAgIDQsXG4gICAgICAgIDE0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDU4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTUzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTM3LFxuICAgICAgICA0MixcbiAgICAgICAgMSxcbiAgICAgICAgMTY4LFxuICAgICAgICA3NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1MixcbiAgICAgICAgMSxcbiAgICAgICAgODQsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTY0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTcwLFxuICAgICAgICA5NixcbiAgICAgICAgNDcsXG4gICAgICAgIDI4LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTAxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDUzLFxuICAgICAgICA4MixcbiAgICAgICAgNixcbiAgICAgICAgMTM5LFxuICAgICAgICA1NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDU4LFxuICAgICAgICA0MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTksXG4gICAgICAgIDgxLFxuICAgICAgICAxODUsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjI3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODEsXG4gICAgICAgIDc4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTczLFxuICAgICAgICA3MixcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNyxcbiAgICAgICAgMjI2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMixcbiAgICAgICAgMjM3LFxuICAgICAgICA4MixcbiAgICAgICAgMTQ0LFxuICAgICAgICA3MixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDksXG4gICAgICAgIDk2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMixcbiAgICAgICAgNTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODUsXG4gICAgICAgIDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODcsXG4gICAgICAgIDY2LFxuICAgICAgICA0MSxcbiAgICAgICAgMjMzLFxuICAgICAgICA2NixcbiAgICAgICAgMzMsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDkxLFxuICAgICAgICA5MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI1LFxuICAgICAgICA5MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDkxLFxuICAgICAgICAxODQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJJL2tQM2VkbmtrbGloY1hJdDZzQ2c0WDdLTW56V0phWWlaWmhqbXBLVDA0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJZdVBWMXhTRlRIdWFycm5PdWRvejV3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjgxMDUzZjVmLTA2ZWMtNDE5MS04ZjY3LTcyMjljZDhiODNjMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzEsXG4gICAgICA4NyxcbiAgICAgIDI0MixcbiAgICAgIDQ0LFxuICAgICAgMTY0LFxuICAgICAgMTY0LFxuICAgICAgMjQxLFxuICAgICAgMTEwLFxuICAgICAgMjA5LFxuICAgICAgMjU1LFxuICAgICAgNjYsXG4gICAgICAyMzAsXG4gICAgICAxNjUsXG4gICAgICA0MixcbiAgICAgIDE4OCxcbiAgICAgIDIzNyxcbiAgICAgIDIzMSxcbiAgICAgIDMyLFxuICAgICAgNixcbiAgICAgIDIxMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTUsXG4gICAgICAyMjAsXG4gICAgICAzMSxcbiAgICAgIDU5LFxuICAgICAgMTgwLFxuICAgICAgMTgwLFxuICAgICAgMjEzLFxuICAgICAgMTM1LFxuICAgICAgMTczLFxuICAgICAgMjUzLFxuICAgICAgMjQ5LFxuICAgICAgNjYsXG4gICAgICA5MCxcbiAgICAgIDEzMixcbiAgICAgIDIyOSxcbiAgICAgIDk2LFxuICAgICAgMjI2LFxuICAgICAgODEsXG4gICAgICAxMTgsXG4gICAgICAxMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWFdTVFo1UFBcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI0MzgyMzY2MTk4MToxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdkIrwnZCA8J2QmPCdkIAg8J2QkvCdkIDwnZCS8J2QgPCdkIrwnZCIXCIsXG4gICAgXCJsaWRcIjogXCIyMjI3MDc0NDI1Nzc1NTM6MTZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGpzNElrRkVLdU1pN2NHR0E4Z0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIyTHpheEpRc2kzVEhVMm5IMzJoWlh1c2RTTUhoSXJxS2pMUXA0S0ZLekRVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjFWVGE1TmltZTN5LzdBUjh2U25lcldOdkRZa1NQcGZ4cHRNRjlPNTlCa2hMV2pxZmdad2FvUmhoMEVTQ0RBOUYwNDFFbElveVRvVWhrejlTUlM1MEFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInIweVFwcS9jUmtLVkc5TTZOZ3JvaU0yUzc3R3N0K2hQSDA5dS91ZXJaZFVIbHAxTWtaSnpLaGFSL1FuRmUxdDR3bGdFa25wUnNFTkNQRTBVSWI1NERnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI0MzgyMzY2MTk4MToxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI2MTM3OTA0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
