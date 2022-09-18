const { MessageEmbed, Message, client } = require("discord.js");

function RowRan() {
  var row = [':white_check_mark: :question: :question:', ':question: :white_check_mark: :question:', ':question: :question: :white_check_mark:']
  var ranrow = row[Math.floor(Math.random()*row.length)];
  return ranrow;
}

function RanAcc() {
    var rating = Math.floor((Math.random() * 20) + 40);
    return rating;
}
 
module.exports = ({
    name: "towers",
    execute(message, args, client) {
        
    if(!args[0]) return message.channel.send("Enter the round ID");
    if(args[1]) return message.channel.send("Invalid round ID");  

    const embed = new MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setColor('#24ff83')
        .addFields(
            { name: 'Towers Prediction', value: RowRan()  + "\n" + RowRan() + "\n" + RowRan()  + "\n" + RowRan() + "\n" + RowRan() + "\n" + RowRan() + "\n" + RowRan() + "\n" + RowRan() + "\n", inline: false },
            { name: 'Accuracy', value: RanAcc() + '%', inline: true },
                )
        .setTimestamp()
        return message.channel.send(embed)
 
    }
})
 