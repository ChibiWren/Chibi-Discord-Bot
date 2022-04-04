//command that returns owo
module.exports = {
    name: 'owo',
    description: 'Sends an owo',
    execute(interaction) {
        interaction.reply({
          content: 'OWO, Whats this?'
        })
    }
    
}