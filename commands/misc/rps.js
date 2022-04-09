//TODO change the color of embed based on win/loss
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'rps',
    description: 'Play a game of Rock, Paper, Scissors',
    options: [{
        name: 'hand',
        description: 'Choose to play Rock, Paper, or Scissors',
        type: 3,
        required: true,

    }] ,
     execute (interaction, player) {

        //win message
        function win() {
            interaction.reply(`${interaction.user} wins!`)
        }
       
        //tie message
         function tie() {
            interaction.reply('Its a tie...')
        }


        //lose message
         function lose() {
            interaction.reply('Chibi Bot Wins!')
        }

        
        
        const rps = ['rock', 'paper', 'scissors']
        
        const collector = interaction.options.get('hand').value
        if(rps.indexOf(collector) === -1) {
            console.log('Invalid Input');
            interaction.reply("Sorry, This is not a Valid Input")
          } else {


            const user = collector.toLowerCase()
            const cpu = rps[Math.floor(Math.random() * rps.length)]
            //check current values
            console.log(`cpu played ${cpu}`)
            console.log(`user played ${user}`)
            
            //checks the input from user and random variable from cpu to find winner
            try {
            if (cpu === 'rock') {
                //rock embed
                var rockEmbed = new MessageEmbed()
                .setTitle('Chibi Bot played Rock')
                .setImage('https://i.imgur.com/0ijLrZZ.png')
                .setColor('#000000')

                interaction.channel.send({embeds: [rockEmbed]})


                if (user === 'rock') {  tie() } 
                if (user === 'scissors') {  lose() }
                if (user === 'paper') {  win() }
  
                
            } else if (cpu === 'paper') {
                //paper embed
                const paperEmbed = new MessageEmbed()
                .setTitle('Chibi Bot played Paper')
                .setImage('https://i.imgur.com/NHz26sy.png')
                .setColor('#000000')

                interaction.channel.send({embeds: [paperEmbed]})
  

                if (user === 'rock') {  lose() }
                if (user === 'scissors') {  win() }
                if (user === 'paper') {  tie() }     


            } else if (cpu === 'scissors') {
                
                //scissors embed
                 const scissorsEmbed = new MessageEmbed()
                .setTitle('Chibi Bot played Scissors')
                .setImage('https://i.imgur.com/eSirMpe.png')
                .setColor('#000000')

                interaction.channel.send({embeds: [scissorsEmbed]})

                if (user === 'rock') {  win() }
                if (user === 'scissors') {  tie() }
                if (user === 'paper') {  lose() }
               
            } else {
                
                interaction.channel.send('Invalid Input')
            }

        } catch (error) {
            console.log(error);
            interaction.followUp({
              content: 'There was an error trying to execute that command: ' + error.message,
            });
          }
        }
    } 
        
}

    
