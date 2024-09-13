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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_23_09_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTY5LFxuICAgICAgICA2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgODAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTI3LFxuICAgICAgICA0OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDgyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDgzLFxuICAgICAgICAxODcsXG4gICAgICAgIDcyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzNixcbiAgICAgICAgNixcbiAgICAgICAgNTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDMxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDkxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTk3LFxuICAgICAgICA3NCxcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTU2LFxuICAgICAgICA2NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDY1LFxuICAgICAgICA3OCxcbiAgICAgICAgMjE3LFxuICAgICAgICA4NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDcyLFxuICAgICAgICAxNixcbiAgICAgICAgMTI1LFxuICAgICAgICA5NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDUyLFxuICAgICAgICAxMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjcsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDksXG4gICAgICAgIDEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTE4LFxuICAgICAgICA4NixcbiAgICAgICAgNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTMwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDQ2LFxuICAgICAgICA0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzAsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDk0LFxuICAgICAgICAzNCxcbiAgICAgICAgNixcbiAgICAgICAgMTQzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDc1LFxuICAgICAgICA5NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDYyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk0LFxuICAgICAgICA3MSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTk0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjEsXG4gICAgICAgIDUwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjA4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTMxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjksXG4gICAgICAgIDExNixcbiAgICAgICAgMTMyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDc4LFxuICAgICAgICAxMixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkFDbHdXOVVXVmszWnlCdDZ1WC9YZVlvU1IzUzBoc1JoMjRnMFdLVVFRNUk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjhxczlFQnp3UTd1b0trdDFMN05VR0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTM5MWEyYjUtZjUzMC00NTJkLTg1NTAtZGFjMGQ5ZjZkMmY2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMixcbiAgICAgIDQxLFxuICAgICAgMTk5LFxuICAgICAgMTgyLFxuICAgICAgMTQ3LFxuICAgICAgMjMyLFxuICAgICAgMjE3LFxuICAgICAgNjQsXG4gICAgICA2NSxcbiAgICAgIDE3LFxuICAgICAgMjMyLFxuICAgICAgMTIwLFxuICAgICAgMjAzLFxuICAgICAgMTIyLFxuICAgICAgMjgsXG4gICAgICAyMDAsXG4gICAgICAyMDQsXG4gICAgICAyMDcsXG4gICAgICA1LFxuICAgICAgMTUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MCxcbiAgICAgIDY4LFxuICAgICAgMTY5LFxuICAgICAgNjQsXG4gICAgICAyNyxcbiAgICAgIDIwNCxcbiAgICAgIDIwOSxcbiAgICAgIDE2NixcbiAgICAgIDIyOSxcbiAgICAgIDEwMSxcbiAgICAgIDEwMyxcbiAgICAgIDIwOSxcbiAgICAgIDkzLFxuICAgICAgMjAsXG4gICAgICAzNSxcbiAgICAgIDc0LFxuICAgICAgMTE4LFxuICAgICAgNzIsXG4gICAgICAxNCxcbiAgICAgIDEyM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJXMUpUTUs3SlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjQzODIzNjYxOTgxOjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2QivCdkIDwnZCY8J2QgCDwnZCS8J2QgPCdkJLwnZCA8J2QivCdkIhcIixcbiAgICBcImxpZFwiOiBcIjIyMjcwNzQ0MjU3NzU1MzoxN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQbnM0SWtGRUxIZ2pyY0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjJMemF4SlFzaTNUSFUybkgzMmhaWHVzZFNNSGhJcnFLakxRcDRLRkt6RFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibjBmRk5VVEtBd0prbU1HZVlMVDMwMjR2cXF0UEZMdG9rdEpCUWZncTBML0NGMlkyTk9YOG9zUlF4cXl3ZE9oN2FuOHhycE1CYkgrRk5jQlJhTmJOQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMjBFR3dJVFU5ZS9rSnN4Vm5uT1hBV0dOdTlkd1dzb2plRlJyYVdXZy9EMVA5Si9MUjdkRllzakloSGRWNlNDMno4dWRVYmNSUHNYc2g5WXp4VHZZQlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjQzODIzNjYxOTgxOjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjYxOTc4MTZcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
