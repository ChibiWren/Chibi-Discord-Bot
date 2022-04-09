//coinflip command

const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'coinflip',
    description: 'Flips a coin',
    execute (interaction, player) {

        try {
        
        const result = Math.floor(Math.random() * 2)

        console.log(result)

        if (result == 0) {
            const headsEmbed = new MessageEmbed()
            .setTitle('HEADS')
            .setColor('#67D1E2')
            .setImage('https://i.imgur.com/IgFKCn2.png')

            interaction.reply({embeds: [headsEmbed]})

        } else {
            const tailsEmbed = new MessageEmbed()
            .setTitle('TAILS')
            .setColor('#67D1E2')
            .setImage('https://i.imgur.com/MCgoAGo.png')

            interaction.reply({embeds: [tailsEmbed]})
        } 
    } catch (err) {
        console.log(error);
        interaction.followUp({
          content: 'There was an error trying to execute that command: ' + error.message,
        })
    
    }
}
}