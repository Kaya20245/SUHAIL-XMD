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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_34_09_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDczLFxuICAgICAgICAxNTEsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjA0LFxuICAgICAgICA1NyxcbiAgICAgICAgMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTYzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDgyLFxuICAgICAgICAxNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTcxLFxuICAgICAgICA2MyxcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTIsXG4gICAgICAgIDE5LFxuICAgICAgICAzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI2LFxuICAgICAgICA5NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTAxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTE5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzLFxuICAgICAgICA1NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTUyLFxuICAgICAgICAzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjU1LFxuICAgICAgICA4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDYyLFxuICAgICAgICA0MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzksXG4gICAgICAgIDU5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDUxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzksXG4gICAgICAgIDE0MixcbiAgICAgICAgODQsXG4gICAgICAgIDEyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTUxLFxuICAgICAgICA0NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDY4LFxuICAgICAgICA4MCxcbiAgICAgICAgODAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMixcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxODAsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDg1LFxuICAgICAgICA4NixcbiAgICAgICAgODIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAzNixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MixcbiAgICAgICAgMjEzLFxuICAgICAgICAxODgsXG4gICAgICAgIDMsXG4gICAgICAgIDEyLFxuICAgICAgICAxODQsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODEsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDczLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODAsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTkwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjM0LFxuICAgICAgICA0NixcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjE4LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicEwxblptMitiMUVPMFhmNHk0RldlWmhsc2tZb1FNUjBtVzU2QkNPenphND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNDM4MjM2NjE5ODFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjAzNzVDQ0RBQTQ5QkI2NUI0NjlGQTNEMjE5QTA0MjI0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNjQyMTY3NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCItMkxMZ1VVNVNPV0ZwN25wWElYX1FRXCIsXG4gIFwicGhvbmVJZFwiOiBcImU3ZTFlZWRiLTVhZGEtNDUxNS05MmNkLWE0MTE3NzVkMDMxY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMCxcbiAgICAgIDIxOSxcbiAgICAgIDE1OSxcbiAgICAgIDEyMyxcbiAgICAgIDkzLFxuICAgICAgMjI2LFxuICAgICAgMjEwLFxuICAgICAgMjExLFxuICAgICAgMTk1LFxuICAgICAgNCxcbiAgICAgIDE4OSxcbiAgICAgIDEzLFxuICAgICAgMTMsXG4gICAgICAxNDQsXG4gICAgICA1NixcbiAgICAgIDE2NyxcbiAgICAgIDEyNSxcbiAgICAgIDIyMyxcbiAgICAgIDIwOSxcbiAgICAgIDEzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMixcbiAgICAgIDYwLFxuICAgICAgMTUsXG4gICAgICA3OCxcbiAgICAgIDgsXG4gICAgICAxOTAsXG4gICAgICAxOTIsXG4gICAgICAxMTMsXG4gICAgICAxMDMsXG4gICAgICAxNDQsXG4gICAgICAxNDIsXG4gICAgICAyMTUsXG4gICAgICAzNixcbiAgICAgIDc1LFxuICAgICAgMjExLFxuICAgICAgOTAsXG4gICAgICAyMjksXG4gICAgICA1NyxcbiAgICAgIDEyLFxuICAgICAgNzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRDFTTUdZTFhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI0MzgyMzY2MTk4MToyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdkIrwnZCA8J2QmPCdkIAg8J2QkvCdkIDwnZCS8J2QgPCdkIrwnZCIXCIsXG4gICAgXCJsaWRcIjogXCIyMjI3MDc0NDI1Nzc1NTM6MjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHpzNElrRkVLTzFuTGNHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIyTHpheEpRc2kzVEhVMm5IMzJoWlh1c2RTTUhoSXJxS2pMUXA0S0ZLekRVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkZSUjcyL0FqcWM5OUdrbDJmTjk3VDJrckZwV1I2ZDJlSWl1MVU0d2ZaVUtXejR6WkVZY2NIaUprNURpWUk0eGQ4WnVuaDBzLzI4Q3JTT1E1RnltSkJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImJndzdQK1NwYWcvZWhsN1dSdlcrMTZKUTQ4SVV1RHJZOTVnRDJiMm8yWmloT2pUVzdDWmZSRTcxUVBOS3BWQmtTejc3bkk2aENYcmY1MUhtdjl0Z0JBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI0MzgyMzY2MTk4MToyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI2NDIxNjcxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUFcyXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQVzIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJnYUM0Nis1UC9BQ1VjQ1ZSSzhLcHB5SVoxZE9qU3phRXExdlQ0cDNrN0swPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzNjI2Mzg0NjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyNjQwNTI3NzQzOVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Kaya-XMD",
  ownername:process.env.OWNER_NAME|| "Kaya-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
