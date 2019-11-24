const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'help') {
    msg.reply('https://docs.google.com/document/d/1fcc7j54zpbVQ9wVXdcTA7EL-03jbVltU-qP4l5FC7JQ/edit');
  } else if (msg.content === 'bob pay respects') {
    msg.reply('f');
  } else if (msg.content === 'bob say hi') {
    msg.reply('no')
  }else if (msg.content === 'del taco serves') {
    msg.reply('FR E SH A VOCA DO')
  }else if (msg.content === 'how tall is audria') {
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
  }
});

client.login(process.env.token);
