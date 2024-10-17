const fs = require("fs");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.autoviewstatus = true;                 //make true to view statuses 
global.anticall = false


global.SESSION_ID = process.env.SESSION_ID || "{"noiseKey":{"private":{"type":"Buffer","data":"oPk7garOIdm5fIRbeYn+CCH7xkMnU0y4ii/AIYIfmVQ="},"public":{"type":"Buffer","data":"lruVG3UWjsGPxC7yZRZFTcwPVYMERjf4Oy/t/UOMhx0="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"gE1YiK8WSkos3bYL3nTlx1W9neDGoj4wHjCjZhJ5smA="},"public":{"type":"Buffer","data":"Kq7vKvzSa3boJMDoRyYoGF11ho0kQrD9zPPDmqja5yI="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"iOnnjKhn/AQulOvOxfp+Ym5BBD1uQSjr7LYO+K+y3lg="},"public":{"type":"Buffer","data":"jpM5+I7w+7ZNIZ7DBCGdA/EH8RA36Ts3xUv+Pw3P8wk="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"UKJDekgl6z7MMbHgxIdL1MkB+rHbS98ri5zYS+owL2I="},"public":{"type":"Buffer","data":"aNGA4XL7nUSXW0HbGv9fmxnEvXJhLQ8Em9e2DXDgPF0="}},"signature":{"type":"Buffer","data":"HWR9N9F1ouI2scYMjCvAC9675O4bcsysacsxLKy331ri1RyIUcMrsLo/3I+3YqY7MGEgmQL+3Vi+zwAh5DA/Cw=="},"keyId":1},"registrationId":139,"advSecretKey":"z9qYz7lsIbG3NWmVe5D024HKTu5RNH4ZIYll5zzNmjk=","processedHistoryMessages":[{"key":{"remoteJid":"254762573883@s.whatsapp.net","fromMe":true,"id":"4BF3B55F9C3BE5B931394A88C0ACD3E0"},"messageTimestamp":1728829158}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"deviceId":"K6vkskfQR0C7GGrVV0y4Wg","phoneId":"bbeca7b0-08f1-439d-a807-91d4f6698d0d","identityId":{"type":"Buffer","data":"HhO5Z3xFNOqkgnUhAk4PykC97Yw="},"registered":true,"backupToken":{"type":"Buffer","data":"ISFoPpgtsljPHR64wJsu3L7UHEg="},"registration":{},"pairingCode":"3XK1ZNZE","me":{"id":"254762573883:94@s.whatsapp.net","name":"YONIH_S.H.D","lid":"184701159485639:94@lid"},"account":{"details":"CLSq9KwCEN6tr7gGGBAgACgA","accountSignatureKey":"QUMC7vPbTnP4zRG/9gX/9IWJSZmFrQ9KqI0NVFWiyBE=","accountSignature":"UQqJbboCeDEGaW5pV/NfuE8fGNlQbzTE+q3ZsmE+wklg6Si/IgngX5pO/lOPUn2jaTJHudwBKim8C6BFjoJoAw==","deviceSignature":"f4lsH4MK8Y/zWm/hdRshe4Iy1ksw8JZDGY/9pr+xhialh6RWwri9h8X1thCbt7TUOpV9XUUoKXkDwOmVk5joDg=="},"signalIdentities":[{"identifier":{"name":"254762573883:94@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BUFDAu7z205z+M0Rv/YF//SFiUmZha0PSqiNDVRVosgR"}}],"platform":"smba","lastAccountSyncTimestamp":1728829152,"myAppStateKeyId":"AAAAADCI"}"
global.Owner = ["254782903443"]; //like 2347080968564 
global.OwnerName =  "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";
global.BotName = "♱MAKINO-MD-V2♱♡⃤";
global.packname = "♱MAKINO-MD-V2♱♡⃤";                             //Do not change.
global.author = "TAIRA MAKINO";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/DOVRqF006VHHZhiSNwJRce"; 
global.SupportGroupLink = "https://chat.whatsapp.com/DOVRqF006VHHZhiSNwJRce"; //Do not change!
global.menutype = "v3"

global.prefa = ['','!','.',','] 

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic7.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");
global.OwnerNumber = [""] //Ignore,Unused

//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command!',
    grouponly: 'This command is only made for *Groups*',
    privateonly: 'This command is only made for *Private Chat*',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
