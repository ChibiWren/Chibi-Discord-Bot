//command that returns owo
module.exports = {
    name: 'owo',
    description: 'Sends an owo',
    execute(interaction, player) {
        interaction.reply({
          content: 'OWO, Whats this?'
        })
    }
    
}