//════════════════════════════//
//If you want to recode, reupload
//or copy the codes/script,
//pls give credit
//no credit? i will take action immediately
//© 2022 Xeon Bot Inc. Cheems Bot MD
//Thank you to Lord Buddha, Family and Myself
//════════════════════════════//
//recode kar ke youtube pe upload kar rhe hai ya
//codes copy kar ke apne script me dal rhe
//hai to, description me xeon ka yt channel
// ka link paste kr dena as a cradit or github 
//repo me bhi tag kardena baki jo
//bhi karna hai apki marzi, thank you!🦄
//════════════════════════════//
//If you recode and uploading on your channel
//or copy pasting the codes in ur script, 
//i give permission to do as long as you
//put Xeons youtube channel link in the video
//description and tag me on githuh repo, 
//thank you🦄
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'your key',
}


//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = false //auto reading in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

//semt menu variants
global.vidmenu = fs.readFileSync("./KhufuMedia/theme/Cheems-bot.mp4") //gif and video menu

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.vcardowner = ['akeskatt'] //ur owner number
global.ownername = "عـاڪسـﮯ خط" //ur owner name
global.ytname = "YT: akeskatt" //ur yt chanel name
global.socialm = "o" //ur github or insta name
global.location = "saudi" //ur location

//bot bomdy 
global.owner = ['Akeskatt']
global.ownertag = 'akeskatt' //ur tag number

global.botname = 'ᴹᴿ᭄ Bot Whatsapp ×፝֟͜×' //ur bot name
global.linkz = "..." //your theme url which will be displayed on whatsapp
global.websitex = "..." //ur website to be displayed
global.botscript = '...' //script link
global.reactmoji = "💗" //ur menu react emoji
global.themeemoji = "🦄" //ur theme emoji
global.packname = "akeskatt" //ur sticker watermark packname
global.author = "akeskatt ☺️ " //ur sticker watermark author

//Bot theme media
global.thum = fs.readFileSync(".") //ur thumb pic
global.log0 = fs.readFileSync(".) //ur logo pic
global.err4r = fs.readFileSync(..) //ur error pic
global.thumb = (..) //ur thumb pic

//damtabase
global.premium = ['akeskatt'] //ur premium numbers
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

//omther
global.sessionName = 'session'
global.antitags = true
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: ' تم ✓',
    admin: 'يجب ان تكون مشرف رد الي ',
    botAdmin: 'رد الي يجب ان تكون مشرف ',
    owner: 'ميزه دي ل مالك البوت فقط ',
    group: 'فقط في القروبات ',
    private: 'برايفت بس!',
    bot: 'ميزه للبوت فقط',
    wait: 'نتظر قليلا ....',
    linkm: 'الرابط جاهز؟',
    error: 'erorr!!!!',
    endLimit: 'تعال بكره !',
    ban: 'لا استطيع ارسال اي شئ لان مالك قام بحظر هاذا روم !',
    nsfw: 'ميزه مغلقة رد الي  !',
    banChat: ''
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('.')
global.flaming = 'https://www.flamingtext.com/net-?&imageoutput=tr=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www.flamingtext.com/net-.cgi?&imageouript=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www.flamingtext.com/net-fucgi?&imageout&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www.flamingtext.com/neorm.cgi?&imagee&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
