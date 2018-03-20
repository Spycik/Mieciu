const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json")

const Words = ["m!help"];
const milosc = ["Mieciu kocham cie"];
client.on('ready', () => {
  console.log(`Zalogowano jako ${client.user.tag}!`);
});

client.on('message', msg => { 
  if(msg.author.bot) return;
  if (msg.content == 'ping') {
    msg.channel.sendMessage('pong');
  }
  if (msg.content === 'Mieciu poratuj złotóweczką') {
    msg.reply('https://imgur.com/a/gVwa1');
  }
  if (msg.content === 'Mieciu przestrasz mnie') {
    msg.reply('https://thumbs.gfycat.com/GleefulWeeFirefly-size_restricted.gif');  
  }
  if (msg.content === 'Mieciu pogłaszcz mnie') {
    msg.reply('ok http://filing.pl/wp-content/uploads/2015/09/filing_images_6d7223b57ffe.gif');  
  }
  if (msg.content === 'Ługowskyy jest fajny') {
    msg.reply('Fajny? Kto by tam go lubiał. Nie lubi i War Thunder, i Ninjago, chyba jedyne osoby jakie go lubią to Krzysiek i Mates...');  
  }
  if (msg.content === 'Mieciu wpierdol mi') {
    msg.reply('https://cdn.discordapp.com/attachments/418899766919954433/422826049819377679/wkurzony-kotel.gif');  
  }
  if (msg.content == 'Mieciu przywitaj się') {
    msg.channel.sendMessage('http://img2.stylowi.pl//images/items/o/201410/stylowi_pl_inne_26187487.gif');
  }
  if (msg.content === 'Mieciu flirtuj ze mną') {
    msg.reply('https://78.media.tumblr.com/6dd33817ab7c9c4badfb79a4a79df973/tumblr_nn0g44ETJK1ur6wvco1_400.gif');
  }
  
  if (msg.content === 'Mieciu przytul') {
    msg.reply('https://m.popkey.co/5e243a/d9DQ6_s-200x150.gif');
  }
  if (msg.content === 'Mieciu zabij sie') {
    msg.reply('https://media.giphy.com/media/JlrG0SpsjDIHK/giphy.gif');
  }
  if (msg.content === 'Mieciu będzie ban?') {
    msg.reply('https://i.imgur.com/O3DHIA5.gif?noredirect');
  }
  if (msg.content === 'Mieciu kocham cie') {
    msg.reply('A ja ciebie nie ;)');
  }
  if (msg.content === 'Mieciu') {
    msg.reply('Nie widzisz, że śpie? Zaraz ci wpierdole >:(');
  }
  if (msg.content === 'Dobranoc') {
    msg.reply('Idź już');
  }
  if (msg.content === 'Witam') {
    msg.reply('Witam ja ciebie przybyszu');
  }
  if (msg.content === 'Prawda Mieciu?') {
    msg.reply('Najprawdziwsza');
  }
  if (msg.content == 'Mieciu to cham') {
    msg.reply('We no spierdalaj');
  }
  if (msg.content == 'Mieciu umiesz?') {
    msg.channel.sendMessage('Nie');
  }
  if(msg.author.bot) return;
  if (msg.content == 'TEST') {
    msg.channel.sendMessage('Melduję się');
  }
  if (msg.content == 'Mieciu kłamie') {
    msg.reply('Ejejejej. Bez takich oskarżeń mi tu');
  }
   if (msg.content == 'Mieciu cho na solo') {
    msg.reply('https://cdn.discordapp.com/attachments/418899766919954433/422826049819377679/wkurzony-kotel.gif');
  }
  if (msg.content == 'm!whitewine') {
    msg.reply('🍾 Oczywiście, białe winko dla Ciebie (づ ◔ ヮ ◔ )づ');
  }
  if (msg.content == 'm!beer') {
    msg.reply('🍺 Już się robi. Piwerko dla Ciebie (づ ◔ ヮ ◔ )づ');
  }
  if (msg.content == 'm!whiskey') {
    msg.reply('🥃 Whiskey specjalnie dla Ciebie (づ ◔ ヮ ◔ )づ');
  }
  if (msg.content == 'm!advocat') {
    msg.reply('🥃 Advocat już gotowy (づ ◔ ヮ ◔ )づ');
  }
  if (msg.content == 'm!vodka') {
    msg.reply('🥃 Już. Wódka specjalnie dla ciebie (づ ◔ ヮ ◔ )づ');
  }
  if (msg.content == 'm!redwine') {
    msg.reply('🍾 Czerwone winko dla ciebie (づ ◔ ヮ ◔ )づ');
  }
  if (msg.content == 'm!apple juice') {
    msg.reply('🥤 Soczek dla ciebie (づ ◔ ヮ ◔ )づ');
  }
  if (msg.content == 'm!watermelon') {
    msg.reply('🍉 Arbuzik dla ciebie (づ ◔ ヮ ◔ )づ');
  }
   if (msg.content == 'm!coffee') {
    msg.reply('☕ Kawusia dla Ciebie (づ ◔ ヮ ◔ )づ');
  }
  if (msg.content == 'm!tea') {
    msg.reply('🍵 Herbatka dla Ciebie (づ ◔ ヮ ◔ )づ');
  }
  if (msg.content === 'Mieciu pomocy') {
    message.author.send('Mieciu poratuj złotóweczką - Mieciu poratuje');  
    message.author.send('Mieciu przestrasz mnie - Mieciu umie straszyć');  
    message.author.send('Mieciu pogłaszcz mnie - Mieciu pogłaszcze'); 
    message.author.send('Ługowskyy jest fajny - Nie jest xD');
    message.author.send('Mieciu wpierdol mi - Mieciu ma pare w łapie'); 
    message.author.send('Mieciu to cham - ...');  
    message.author.send('Japierdole - Ciekawe kogo hehe'); 
    message.author.send('Mieciu przywitaj się - On to się umie przywitać');
    message.author.send('Mieciu flirtuj ze mną - Niezły z niego flirciaż');  
    message.author.send('Mieciu przytul - prztulaśy kolega'); 
    message.author.send('Mieciu zabij sie - ...');
    message.author.send('Mieciu kocham cie - On jest zajęty');
    message.author.send('Mieciu - On nie lubi być budzony');
    message.author.send('Mieciu kłamie - ...');
    message.author.send('Mieciu cho na solo - z Mieciem nie wygrasz');
    message.author.send('m!redwine - Mieciu zapoda czerwone winko');
    message.author.send('m!whitewine - Mieciu zapoda białe winko');
    message.author.send('m!advocat - Mieciu zapoda Advocat');
    message.author.send('m!apple juice - Mieciu poda coś dla młodszych');
    message.author.send('m!watermelon - Mieciu zapoda Arbuzika (request:Tourettes)');
    message.author.send('m!whiskey - Mieciu zapoda whiskey');
    message.author.send('m!beer - Mieciu wie, że jesteście Polaczkami xD');
    message.author.send('m!vodka - Mieciu zapoda coś mocniejszego');
    message.author.send('m!coffee - Mieciu zaparzy kawke');
    message.author.send('m!tea - Mieciu zaparzy herbatke');
  }
  if (msg.content == 'Mieciu nowość') {
    msg.reply('');
  }
});

/*client.on("message", async message => {
  //   event will run on every single message received, from any channel or DM.

  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if (message.author.bot) return;

  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  if (message.content.indexOf('Mieciu') !== 0 && message.content.indexOf('m!') !== 0) return;

  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  
  
  const command = args.shift().toLowerCase();
  if(command === 'poratuj') {
    console.log('1')
    const drugie = args.join(" ");
    if(drugie === 'złotóweczką') {
    console.log('2')
    message.channel.send('https://imgur.com/a/gVwa1')
    }
    }
});*/

client.on("message", (message) => {
  if (Words.some(word => message.content.includes(word))) {
    message.author.send('Mieciu poratuj złotóweczką - Mieciu poratuje');  
    message.author.send('Mieciu przestrasz mnie - Mieciu umie straszyć');  
    message.author.send('Mieciu pogłaszcz mnie - Mieciu pogłaszcze'); 
    message.author.send('Ługowskyy jest fajny - Nie jest xD');
    message.author.send('Mieciu wpierdol mi - Mieciu ma pare w łapie'); 
    message.author.send('Mieciu to cham - ...');  
    message.author.send('Japierdole - Ciekawe kogo hehe'); 
    message.author.send('Mieciu przywitaj się - On to się umie przywitać');
    message.author.send('Mieciu flirtuj ze mną - Niezły z niego flirciaż');  
    message.author.send('Mieciu przytul - prztulaśy kolega'); 
    message.author.send('Mieciu zabij sie - ...');
    message.author.send('Mieciu kocham cie - On jest zajęty');
    message.author.send('Mieciu - On nie lubi być budzony');
    message.author.send('Mieciu kłamie - ...');
    message.author.send('Mieciu cho na solo - z Mieciem nie wygrasz');
    message.author.send('m!redwine - Mieciu zapoda czerwone winko');
    message.author.send('m!whitewine - Mieciu zapoda białe winko');
    message.author.send('m!advocat - Mieciu zapoda Advocat');
    message.author.send('m!apple juice - Mieciu poda coś dla młodszych');
    message.author.send('m!watermelon - Mieciu zapoda Arbuzika (request:Tourettes)');
    message.author.send('m!whiskey - Mieciu zapoda whiskey');
    message.author.send('m!beer - Mieciu wie, że jesteście Polaczkami xD');
    message.author.send('m!vodka - Mieciu zapoda coś mocniejszego');
    message.author.send('m!coffee - Mieciu zaparzy kawke');
    message.author.send('m!tea - Mieciu zaparzy herbatke')
  }
 });

 client.on("message", (message) => {
  if (milosc.some(word => message.content.includes(word))) {
    message.author.send('Tak naprawdę cię kocham 😘');
  }
  });
client.login(config.token);