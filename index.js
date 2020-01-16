const {Client, Attachment} = require('discord.js');
const bot = new Client();

const token = process.env.token;

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
        case 'graph':
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
        case 'help':
            message.channel.sendMessage("It will be soon... Just wait.")
            break;
        
    }

})

bot.login(token);

