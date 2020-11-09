const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'bob') {
    msg.reply('\ \n bob pay respects\n bob say hi\n bob del taco serves\n bob how tall is audria\n' + 
    ' bob whats 17-8\n bob who made you\n this is so sad bob play despacito\n bob whats your favorite song\n' +
    ' bob whats your favorite song\n bob give us a fish fact\n bob I love you\n bob help\n bob roast me\n' +
    ' bob is alexa better than you\n bob beatbox\n bob whos joe');
  } else if (msg.content === 'bob pay respects') {
    msg.reply('f');
  } else if (msg.content === 'bob say hi') {
    msg.reply('no')
  }else if (msg.content === 'bob del taco serves') {
    msg.reply('FR E SH A VOCA DO')
  }else if (msg.content === 'bob how tall is audria') {
    msg.reply('taller than you')
  }else if (msg.content === 'bob whats 17-8') {
    msg.reply('5')
  }else if (msg.content === 'bob who made you') {
    msg.reply('ur mom')
  }else if (msg.content === 'this is so sad bob play despacito') {
    msg.reply('https://youtu.be/kJQP7kiw5Fk')
  }else if (msg.content === 'bob whats your favorite song') {
    msg.reply('https://youtu.be/aALk6BJw8J4')
  }else if (msg.content === 'bob give us a fish fact') {
    msg.reply('one day fish will take over the world')
  }else if (msg.content === 'bob i love you') {
    msg.reply('duck you')
  }else if (msg.content === 'bob I love you') {
    msg.reply('duck you')
  }else if (msg.content === 'bob help') {
    msg.reply('you get none')
  }else if (msg.content === 'bob roast me') {
    msg.reply('I cant your mother already did that')
  }else if (msg.content === 'bob is alexa better than you') {
    msg.reply('whos alexa')
  }else if (msg.content === 'bob beatbox') {
    msg.reply('https://youtu.be/4jxc_jyLbCM')
  }else if (msg.content === 'bob whos joe') {
    msg.reply('JOE MAMA')
  }
});

client.login(process.env.token);
