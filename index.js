var TelegramBot = require('node-telegram-bot-api'),
    token = '447180335:AAFDPGQ2cyOG2hxxxxxtDvxUKpLffUE8Q';

var bot = new TelegramBot(token, { polling: true });

bot.can_delete_messages = true;

bot.on('message', (msg) => {
    //инфа, откуда пришло обращение к боту
    console.log(msg);
    var bye = "bye";
    if (msg.text.toLowerCase().includes(bye)) {
        bot.sendMessage(msg.chat.id, "Have a nice day " + msg.from.first_name); 
    }
    
    var hello = "hello";
    if (msg.text.toLowerCase().includes(hello)){
        bot.sendMessage(msg.chat.id, "Hi, " + msg.from.first_name);
    }
    
    var clean = "clean";
    
    if (msg.text.toLowerCase().indexOf(clean) === 0){
        for (var i = msg.message_id; i > 0; i--){
            bot.deleteMessage(msg.chat.id, i);
        }
    }
});
