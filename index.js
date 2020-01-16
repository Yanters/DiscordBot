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

        case 'clear':
            if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("You can't delete messages....").then(m => m.delete(5000));
        }

        // Check if args[1] is a number
        if (isNaN(args[1]) || parseInt(args[1]) <= 0) {
            return message.reply("Yeah.... That's not a numer? I also can't delete 0 messages by the way.").then(m => m.delete(5000));
        }

        // Maybe the bot can't delete messages
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("Sorryy... I can't delete messages.").then(m => m.delete(5000));
        }

        let deleteAmount;

        if (parseInt(args[1]) > 100) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[1]);
        }

        message.channel.bulkDelete(deleteAmount, true)
            .then(deleted => message.channel.send(`I deleted \`${deleted.size}\` messages.`))
            .catch(err => message.reply(`Something went wrong... ${err}`));
    }
        break;
    }

)

bot.login(token);
