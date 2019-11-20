const {Client, Attachment} = require('discord.js');
const bot = new Client();

const token = 'NjQ2MDY3Njg5NTcxNDgzNjUx.XdLvmQ.ii4DPmeSmwZYTvJNq1o0JvnU6As';

const PREFIX = '!';

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', message=>{
let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'sin':
                var a = parseFloat(args[1]);
                a = Math.sin(a* Math.PI / 180);
                //a = Math.decimal(a, 4);
                message.channel.sendMessage(a.toFixed(4));

        break;
        case 'cos':
             var a = parseFloat(args[1]);
             a = Math.cos(a* Math.PI / 180);
             
             message.channel.sendMessage(a.toFixed(4));
            
        break;
        case 'tg':
                        var a = parseFloat(args[1]);
                        a = Math.tan(a* Math.PI / 180);
                        
                        message.channel.sendMessage(a.toFixed(4));
            
        break;
        case 'ctg':
                var a = parseFloat(args[1]);
                a = Math.tan(a* Math.PI / 180);
                a = Math.pow(a,-1);
                
                message.channel.sendMessage(a.toFixed(4));
            
        break;
        case 'send':
                if(args[1]=='sin'){
                        var attachment = new Attachment ('https://www.matemaks.pl/grafika/g0068.png');
                }
                if(args[1]=='cos'){
                        var attachment = new Attachment ('https://www.matemaks.pl/grafika/g0069.png');
                }
                if(args[1]=='tg'){
                        var attachment = new Attachment ('https://www.matemaks.pl/grafika/g0070.png');
                }
                if(args[1]=='ctg'){
                        var attachment = new Attachment ('https://www.matemaks.pl/grafika/g0071.png');
                        }
                message.channel.sendMessage(attachment);
            
        break;
    }

})

bot.login(token);

