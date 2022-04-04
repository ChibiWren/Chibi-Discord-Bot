//coinflip command

const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'coinflip',
    description: 'Flips a coin',
    execute (interaction) {

        const flip = ['heads', 'tails']
        const result = flip[Math.floor(Math.random() * flip.length)]

        console.log(result)

        if (result === 'heads') {
            const headsEmbed = new MessageEmbed()
            .setTitle('HEADS')
            .setColor('#F7F143')
            .setImage('https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/2020_belgian-style-waffles_16700_760x580.jpg?ext=.jpg')

            interaction.channel.send({embeds: [headsEmbed]})

        } else if (result === 'tails') {
            const tailsEmbed = new MessageEmbed()
            .setTitle('TAILS')
            .setColor('#F777ED')
            .setImage('https://m.media-amazon.com/images/I/A1xRLOh8ukL._SL1500_.jpg')

            interaction.channel.send({embeds: [tailsEmbed]})
        } else {
            interaction.channel.send('Error, could not process')
        }
    }
}