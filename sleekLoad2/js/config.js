/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.05
*/

/*URL for the server logo
Leave it blank to use text instead*/
var l_serverImage = "images/logo.png";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "MilkRP";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"backgrounds/videos/aurora.webm"
"backgrounds/videos/bluefall.webm"
"backgrounds/videos/bluetilefloor.webm"
"backgrounds/videos/bluewhitecircles.webm"
"backgrounds/videos/bokehlens.webm"
"backgrounds/videos/cleanbokeh.webm"
"backgrounds/videos/coldnight.webm"
"backgrounds/videos/colorfulburst.webm"
"backgrounds/videos/dancingstars.webm"
"backgrounds/videos/dropsflares.webm"
"backgrounds/videos/focusorangebokeh.webm"
"backgrounds/videos/glimmering.webm"
"backgrounds/videos/glowingrings.webm"
"backgrounds/videos/greencircles.webm"
"backgrounds/videos/hues.webm"
"backgrounds/videos/inthedeep.webm"
"backgrounds/videos/modernflourish.webm"
"backgrounds/videos/orangeaura.webm"
"backgrounds/videos/warminside.webm"
"backgrounds/videos/yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format */
var l_background = "backgrounds/videos/glimmering.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them*/
var l_bgImages = [
	"backgrounds/images/1.jpg",
	"backgrounds/images/2.jpg",
	"backgrounds/images/3.jpg",
	"backgrounds/images/4.jpg",
	"backgrounds/images/5.jpg",
	"backgrounds/images/6.jpg",
	"backgrounds/images/7.jpg",
	"backgrounds/images/10.jpg",
	"backgrounds/images/11.jpg",
	"backgrounds/images/13.jpg",
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = true;

/*Music playlist
Place how much Youtube IDs/.ogg you want*/
var l_musicPlaylist = [
	{ogg: "songs/1.ogg", name: "Good Morning - Oopsie, Hunny - Televised"},
	{ogg: "songs/2.ogg", name: "Logic - Like Woah, Juto - HML"},
	{ogg: "songs/3.ogg", name: "Kansas - Carry On Wayward Son, Black Sabbath - Paranoid"},
	{ogg: "songs/4.ogg", name: "Hunny - Televised, The Heavy - Short Change Hero"},
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 25;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
"Milk Is A Weeb",
"I tried to sell my body and they called it rape",
"OOOOOOAHHHHHHHHHHHH",
"I'm Very  Gay.",
"AHHHHHHHHHHHHHHHHHHH",
"REEEEEEEEEEEE",
"All Old Quotes Will Be Added To The Loading Screen",
"If your mom had your dick it will be a man",
"Ladies and gentlmen, We got him.",
"I love Cocks Lol",
"Spent a couple minutes smashing his keyboard until something legible came out.",
"I like turtles",
"HoW mUcH dEdIdAtEd WaM dO tAKE tO rUn Ev SeRvEr?",
"Jadyn fucks warships",
"What are you? Ma-gic-ian?",
"Sweep the streets boys, sweep em good.",
"watch out for that fucker, he fucks.",
"I'm such a gamer that if you cutt me I bleed gfuel",
"That moment when you change a 10 to a 6...",
"When the water company runs out of money, they don't pump water; they pump bananas",
"I'm too sober for this shit",
"Yaall fuckers a tootsie pop, hard on the outside but soft as fuck on the inside",
"When an error is clientside but you think its serverside so you wipe the server for no reason",
"Bilk Mubbles",
"Milk milk lemonade.........",
"wait, i could put literally anything as a quote?",
"i tried crashing the server, i didn't get banned",
"Squirted out some blood juice",
"If there is not 143 whoppers in this box ima sue",
"Porn Involves Sex",
"Is there something wrong with your forehead?",
"Jon is 6'3 that wears size 14 shoes",
"Is it getting dim in here? Nah I think I'm just high.",
"THE SPANISH INQUIZITION",
"Gotta do what you gotta do.",
"Is that a loss meme?",
"You know what thats for? Spanish.",
"I spend more minutes on shitting",
"DID YOU JUST CRASH BAN ME?",
"I dont fuck with no hack scripts so don't try to sell me nothin",
"This loading music sounds like me fucking a clock",
"Wait, who is osu?",
"Always give the homies a good night kiss",
"I can feel the shit moving through my intestines",
"More fucking cars? You kiding me?",
"IN MEMORY OF THE HOBO WAR OF 2017",
"RIP Jon's Guniea pig",
"Milk is a poor man",
"SOMETIME I DREAM ABOUT CHEESE",
"Nothings impossible, you're all just too weak.",
"JADYN IS GAY CUNFURMED 2019",
"My headphones just died - Milk every night",
"Welcome to Milk RP ENJOY YOUR STAY BITCH",
"Actual Good Quote",
"Rape - Short word, long sentence.",
"BRO HOW DO I BECOME STAFF?",
"Can I be admin/mod - Every Squeeker ever",
"When you actually feel like you want to die inside but then you can just join the server",
"Pick up that can",
"Kill me please",
"NICKOLODEAN GIRLS CANT LIVE WITHOUT EM WHEW",
"That Moment when you get bonus but it's gives you a 0",
"I eat more cocain to get drunk",
"I'm not gay but $20 is $20",
"Request a Quote Via the Discord!",
"Request a Quote Via the Discord!",
"Request a Quote Via the Discord!",
"Request a Quote Via the Discord!",
"Request a Quote Via the Discord!",
];

/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 500;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;