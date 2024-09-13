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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_52_09_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTksXG4gICAgICAgIDEzNixcbiAgICAgICAgOTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTYxLFxuICAgICAgICA4NSxcbiAgICAgICAgODEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTI0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTAzLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgODYsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzIsXG4gICAgICAgIDkyLFxuICAgICAgICA0MixcbiAgICAgICAgMTMzLFxuICAgICAgICA2NixcbiAgICAgICAgMjUzLFxuICAgICAgICA2MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDExNixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDI2LFxuICAgICAgICA0OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTcwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzksXG4gICAgICAgIDEwNixcbiAgICAgICAgMzcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjksXG4gICAgICAgIDEzNyxcbiAgICAgICAgODAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTExLFxuICAgICAgICAxOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjksXG4gICAgICAgIDIyNixcbiAgICAgICAgNixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMCxcbiAgICAgICAgODYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjM4LFxuICAgICAgICA3MSxcbiAgICAgICAgNzksXG4gICAgICAgIDM2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAzOSxcbiAgICAgICAgNDksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQxLFxuICAgICAgICAzNyxcbiAgICAgICAgODksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA0LFxuICAgICAgICA1NixcbiAgICAgICAgMjExLFxuICAgICAgICA5NyxcbiAgICAgICAgNTksXG4gICAgICAgIDQzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQ5LFxuICAgICAgICA4MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODEsXG4gICAgICAgIDU2LFxuICAgICAgICA2MyxcbiAgICAgICAgODgsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUsXG4gICAgICAgIDI3LFxuICAgICAgICA2NixcbiAgICAgICAgMjE4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjIxLFxuICAgICAgICA2MCxcbiAgICAgICAgODIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDY3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQ2LFxuICAgICAgICA0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1LFxuICAgICAgICA5NixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTMzLFxuICAgICAgICA2NixcbiAgICAgICAgMjE0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDM1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDg5LFxuICAgICAgICA0OSxcbiAgICAgICAgODEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDMxLFxuICAgICAgICA4NixcbiAgICAgICAgMjQzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDksXG4gICAgICAgIDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAzMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJwUWZpcE1NTG5BNUN0RE1UUXBMUEsxeTEzZ2QxeVFDT20vTFNobmkwd21JPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ5QVhpT2hBY1JtdVJ5MFpaZEJYNDBnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjdjM2I2OWFhLTc5MjItNDI3NS1hZDNkLTk5YzFlNzM1MWFlNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODMsXG4gICAgICAyMDEsXG4gICAgICAxOTksXG4gICAgICAxNjAsXG4gICAgICAyMTIsXG4gICAgICA5OCxcbiAgICAgIDE4LFxuICAgICAgMTg3LFxuICAgICAgMjM2LFxuICAgICAgNzMsXG4gICAgICA4MCxcbiAgICAgIDUxLFxuICAgICAgMjgsXG4gICAgICAxOTAsXG4gICAgICA2MyxcbiAgICAgIDIwOCxcbiAgICAgIDE0NCxcbiAgICAgIDk1LFxuICAgICAgMjA0LFxuICAgICAgNjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA3LFxuICAgICAgMTE4LFxuICAgICAgMjQ3LFxuICAgICAgMTkyLFxuICAgICAgMTgsXG4gICAgICA0MixcbiAgICAgIDQ5LFxuICAgICAgNixcbiAgICAgIDIsXG4gICAgICAxNzEsXG4gICAgICAyNDcsXG4gICAgICAxMzUsXG4gICAgICAxNTAsXG4gICAgICAxODAsXG4gICAgICAyMTAsXG4gICAgICAyMDEsXG4gICAgICAxOTgsXG4gICAgICAxNzksXG4gICAgICAxMyxcbiAgICAgIDEyMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRSFNWSFQzOFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjQzODIzNjYxOTgxOjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2QivCdkIDwnZCY8J2QgCDwnZCS8J2QgPCdkJLwnZCA8J2QivCdkIhcIixcbiAgICBcImxpZFwiOiBcIjIyMjcwNzQ0MjU3NzU1MzoxOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQcnM0SWtGRUoyamtiY0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjJMemF4SlFzaTNUSFUybkgzMmhaWHVzZFNNSGhJcnFLakxRcDRLRkt6RFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOStjWjZ2clMxdmQzcWRLUWZ5eWdSMHgrcTBDRDloV2w3VHkwVm1vOE1nUVZTc3VNUnhHLy9lT2dwdDA1VXlmTjk3VFZrTVZrRVNQVERDWUtNMTRJQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwia0VQNm9wdWZJVjM2MVJ6THBybGhZWjVJbk84RFJudmlMNWpiWWdKY21GSHRrNkpURDBCWUJKdVB0QWJzeGFJT2ZySmkwbDFZSG5XSUtGSUJsc0dFQmc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjQzODIzNjYxOTgxOjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjYyMzkxMzlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
