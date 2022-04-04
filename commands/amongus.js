const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'amongus',
    description: 'Displays an amongus',
    callback: (message, ...args) => {

        console.log(args)

        const amongUsEmbed = new MessageEmbed()
        .setColor('#FF0000')
        .setTitle('SUS')
        .setImage('https://cdn.pixabay.com/photo/2021/02/12/13/43/among-us-6008615__480.png')
        

        message.channel.send({embeds: [amongUsEmbed]});
    }
    
}