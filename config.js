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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923466908703";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_34_12_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA3NixcbiAgICAgICAgNDIsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMixcbiAgICAgICAgMTEwLFxuICAgICAgICA3NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI2LFxuICAgICAgICA5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNyxcbiAgICAgICAgODIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ2LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTI1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDMzLFxuICAgICAgICAyMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTIxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAzNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTE5LFxuICAgICAgICA0NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDM2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjEzLFxuICAgICAgICA3MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwLFxuICAgICAgICAxNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTksXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDc2LFxuICAgICAgICA0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODAsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDMsXG4gICAgICAgIDE4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTksXG4gICAgICAgIDM3LFxuICAgICAgICA3MixcbiAgICAgICAgMjQsXG4gICAgICAgIDU0LFxuICAgICAgICA0NixcbiAgICAgICAgNjMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODUsXG4gICAgICAgIDYxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDY5LFxuICAgICAgICA1NSxcbiAgICAgICAgMixcbiAgICAgICAgNDAsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE2LFxuICAgICAgICA4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDYwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0LFxuICAgICAgICA1MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjUwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDYsXG4gICAgICAgIDc3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTksXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSERrNDF0REtqUTh0TlZKRzF2WEZZd055ZytWTW9uelNMSFdsb1ZseXVnbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjM0NjY5MDg3MDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjE3MTQxRDg1RTVDQzQyOUVBRTNFMjE2NUQwQjJENUYxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzI1NDQ1OVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1eHdPVFhXMVNUaVZpSkR6cThhS1V3XCIsXG4gIFwicGhvbmVJZFwiOiBcImRjY2M5MjQyLWY5MDctNDFlMC1hZjU2LTkzMDlkN2IyZWZiMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTUsXG4gICAgICA0MCxcbiAgICAgIDU3LFxuICAgICAgMTY3LFxuICAgICAgMjQwLFxuICAgICAgMjIwLFxuICAgICAgNyxcbiAgICAgIDEzMyxcbiAgICAgIDg1LFxuICAgICAgMTk4LFxuICAgICAgMTc2LFxuICAgICAgMjI4LFxuICAgICAgMTMyLFxuICAgICAgNjAsXG4gICAgICA4MCxcbiAgICAgIDE2NSxcbiAgICAgIDI2LFxuICAgICAgMTg5LFxuICAgICAgMjQ3LFxuICAgICAgNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzMsXG4gICAgICAxOSxcbiAgICAgIDEwMixcbiAgICAgIDE1MSxcbiAgICAgIDk3LFxuICAgICAgMTMwLFxuICAgICAgMjUxLFxuICAgICAgMTg1LFxuICAgICAgNzIsXG4gICAgICAxMDUsXG4gICAgICA2NSxcbiAgICAgIDU2LFxuICAgICAgMjIxLFxuICAgICAgMjEwLFxuICAgICAgNTIsXG4gICAgICAyMDUsXG4gICAgICA2MyxcbiAgICAgIDcxLFxuICAgICAgMjUsXG4gICAgICAxNTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRU1WREw3SjdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQ2NjkwODcwMzo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3MTI2MjUxNjg0NjY2Nzo2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01tZm8vb0NFTEc2dmJvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiK0ZBSm91TnRVZHp1RE1QcjdCbU0rVnMwSUxVWUx2Yi8zR0RkT3g2ZllWST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJKYkNtTFdHOExEck9zTHExUkhrUDdhaUpEZnVGUVdTY2IyQTl2WVNqUmlqU3V1UHNCVWsrMkdsN0ptSm9RdkNSY1lzTUhBNEx2NXNETWVIaWhMbU5EQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJuZGdSZWN2dE9veWl1SndtSmlPV3k3dktCMU42dDB6ZXRQOEMya1hXWHRQMWM2WjlhSnYxcVp0M2JpMUFQNW5pbnVmUEUyVE4zS2NmSkJFRERRYW9oUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0NjY5MDg3MDM6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzMjU0NDUzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQzEvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDMS8uanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
