const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = true;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = false;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = true;                 //make true to view statuses 


global.Owner = ["🌡PŁÅÝBÓÍ🌚.🕳FŁĚX💀"];
global.OwnerNumber = ["254782903443"];
global.ownertag = ["PŁÅÝBÓÍ"]; 
global.OwnerName =  "PŁÅÝBÓÍ.FŁĚX";
global.BotName = "🐦PLAYBOI.ENT";
global.packname = "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";                             //Do not change.
global.author = "🐦Makino md ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"yLibNrhWxhy8GgVGGRHQb/0PkBVzjZYtb6/O1gxykVw="},"public":{"type":"Buffer","data":"8SJMevaAsLyN8XQbfQC4hEczgMP/YfookkGTvkTC41s="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"GF/foRp/qsFPEUwH4UipXgmKJxLiJQkjR0mkwIHPanQ="},"public":{"type":"Buffer","data":"EFbT8MfAMAKtuSdtUQb+qN77u1yc/KToK8IE0e4hRXA="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"8IGp0Fi+U7Q368rX9YVdhd0LfHUfrWnLaBtTMQAaYkI="},"public":{"type":"Buffer","data":"FLwIVrBTCeYT5Wbg8ow14IwNczrytJ1L4UL13fvb7iI="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"+P+DpaGdfSDGDXFuQ+ypqOxSZ9Kzxo+FLZsAYBvbv1w="},"public":{"type":"Buffer","data":"UXFnYwsmD/TGW/SU96jnbqNdJEPN8I4amLRMT/E7hE0="}},"signature":{"type":"Buffer","data":"R1QixBma/ybtPslTDhgM+eEB0GC9u7nvYfghkL/FRo/69TxVO0jXya6bbYnofoEK1vqX6Pj5uA/jEGOJ52UkDg=="},"keyId":1},"registrationId":182,"advSecretKey":"XVaLiCNu7gJLCNPYdYM1DAwQA02TuFkZMpLZgJiJm+0=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"Aik3X-fnRYa0s_HbwRgjvA","phoneId":"2999c82e-26e6-49c6-82ce-264cadd98870","identityId":{"type":"Buffer","data":"DcK31yuXOFZzDEVg4fa6KNpj8nk="},"registered":true,"backupToken":{"type":"Buffer","data":"2mL6H57fTYwgsFl3cYCPEu+UJaI="},"registration":{},"pairingCode":"XCJHBHRW","me":{"id":"254782903443:25@s.whatsapp.net"},"account":{"details":"CKiRlWMQsMuJtQYYByAAKAA=","accountSignatureKey":"UQ8jUlCxONuAbhywNRe7kzShOJXSquZ9lfQpQVdWxic=","accountSignature":"zoS1bMobTS4fc19gK2j0QpWOllvNxMRNiaIO/qgDOhsgobRrAEyZ/cbBB9lJ7IX6YO5Cov8pdur1l5TP99MTBw==","deviceSignature":"AtMdbBgSy25EUvz30ipNrRNtIFT4Q5rtDvFGW+g8HSwv5IVoIZmfsn3akLTHZLR9sOn9reg+FN/2j9C5oyGHAQ=="},"signalIdentities":[{"identifier":{"name":"254782903443:25@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BVEPI1JQsTjbgG4csDUXu5M0oTiV0qrmfZX0KUFXVsYn"}}],"platform":"android","lastAccountSyncTimestamp":1721918909,"myAppStateKeyId":"AAAAAFmJ"}
global.prefa = ["*"]

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


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
    botowner: 'Only my *Owner* can use this command,Dont trespass, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
