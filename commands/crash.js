const { MessageEmbed, Message, client } = require("discord.js");

function CrashRan() {
    var crashpoints = Math.floor((Math.random() * 45) + 10) / 10;;
    return crashpoints;
}

module.exports = ({
    name: "crash",
    execute(message, args, client) {
        
    if(!args[0]) return message.channel.send("Enter the round ID");
    if(args[1]) return message.channel.send("Invalid round ID");  

    const embed = new MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setColor('#24ff83')
        .addFields(
            { name: 'Crash Prediction', value: WordsRan() + CrashRan(), inline: true },
            { name: 'Possible Crashpoint', value: CrashRan() + 0.75 + 'X', inline: true },
                )
        .setTimestamp()
        return message.channel.send(embed)
 
    }
})
 
