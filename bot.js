const Discord = require("discord.js");
const client = new Discord.Client();
const prefix   = "^";



client.on("message", message => {
const prefix   = "^";
  if (message.content === `${prefix}help`) {
  const embed = new Discord.RichEmbed()
      .setColor("#000000")
      .setDescription(`
   ** :bookmark:  Help bc :bookmark: **
** ${prefix}bc / لــ ارسال برود كاسيت للكل
   ${prefix}obc / لــ ارسال برود كاسيت لللاون لاين فقط 
   ${prefix}rolebc / لــ ارسال برود كاست لرتبه معينه
   ${prefix}sand / لـ ارسال برود كاسيت لشخص معين
   ${prefix}bot / لمعرفه معلومات البوت
**
==============================================
** لتغير حلات البوت **
** 
   ${prefix}sp / لــ تغير حاله البوت الي بلنيق
   ${prefix}sw / لـ تغير حاله البوت الي واتشنق
   ${prefix}sl / لـ تغير حاله البوت الي لستينق
   ${prefix}ss / لتغير حاله البوت الي استريمنق
**
`)
   message.channel.sendEmbed(embed)
   
   }
   });

const developers = ["539541145835929623","439020996171923466"]
const adminprefix = "^";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;

  if (message.content.startsWith(adminprefix + 'sp')) {//بلينق
    client.user.setGame(argresult);
      message.channel.send(`**Status You   ${argresult}:white_check_mark: **`)
  } else
  if (message.content.startsWith(adminprefix + 'sw')) {//واتشنق
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**Status You   ${argresult}:white_check_mark: **`)
  } else
  if (message.content.startsWith(adminprefix + 'sl')) {//لستينق
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**Status You  ${argresult} :white_check_mark: **`)
  } else
  if (message.content.startsWith(adminprefix + 'ss')) {//استريمنق
    client.user.setGame(argresult, "https://www.twitch.tv/M3roof");
      message.channel.send(`**Status You ${argresult}:white_check_mark:  **`)
}
});

client.on('message', message => {
    if(message.content.startsWith(prefix + 'bot')) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``bot info`` ')
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
                  .addField('``My Prefix``' , `[ - ]` , true)
                  .addField('``My Language``' , `[ Java Script ]` , true)
                  .setFooter('By |!LG ÐrĀčuĿĀ#6764')
    })
}
});

client.on("message", message => {  
              if (message.content.startsWith(prefix + "obc")) {    
                           if (!message.member.hasPermission("ADMINISTRATOR"))  return;   
    let args = message.content.split(" ").slice(1);  
    var argresult = args.join(' ');
    message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {  
   m.send(`${argresult}\n ${m}`);   
  })
   message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'offline').size}\` :mailbox:  عدد المستلمين `);
   message.delete();
  };    
  });

client.on('message', message => { 
    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!args[1]) {
message.channel.send("**^bc <message>**");
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField('» السيرفر :', `${message.guild.name}`)
            .addField('» المرسل : ', `${message.author.username}#${message.author.discriminator}`)
            .addField(' » الرسالة : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});


				client.on('message' , message => {
      if(message.author.bot) return;
     
      if(message.content.startsWith(prefix + "rolebc")) {
        if (!message.member.hasPermission("ADMINISTRATOR"))  return;
        let args = message.content.split(" ").slice(2);
     var codes = args.join(' ')
       
        if(!codes) {
          message.channel.send("قم بكتابة الرسالة | !rolebc @everyone message")
            return;
        }
     
     
              var role = message.mentions.roles.first();
                if(!role) {
                  message.reply("لا توجد رتبة بهذا الاسم")
                    return;
                }
            message.guild.members.filter(m => m.roles.get(role.id)).forEach(n => {
              n.send(
              "**" + 
             "\n" +
              `${codes}` + "**"
              )
            })
            message.channel.send(`**لقد تم ارسال هذه الرسالة الى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عضو**`)
        }
    }); 

client.on("message", message => {
  if (message.content.startsWith(prefix + 'send')) {
    if(!message.author.id === "569502505289908245") return;
    var user = message.mentions.members.first();
    var args = message.content.split(" ").slice(1).join(" ");
user.send(args);
  }});

client.login(process.env.BOT_TOKEN);
 
client.login(process.env.BOT_TOKEN);
