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
    execute (interaction) {
        
        const rps = ['rock', 'paper', 'scissors']
        
        const collector = interaction.options.get('hand').value

       
            

            const user = collector.toLowerCase()
            const cpu = rps[Math.floor(Math.random() * rps.length)]
            //check current values
            console.log(`cpu played ${cpu}`)
            console.log(`user played ${user}`)
            
            //checks the input from user and random variable from cpu to find winner
            try {
            if (cpu === 'rock') {
                

                var rockEmbed = new MessageEmbed()
                .setTitle('Chibi Bot played Rock')
                .setImage('https://i.imgur.com/0ijLrZZ.png')
                .setColor('#000000')

                interaction.channel.send({embeds: [rockEmbed]})


                if (user === 'rock') interaction.channel.send('Its a Tie') 
                if (user === 'scissors') {
                    interaction.channel.send('Chibi Bot Wins!')
                   
                }
                if (user === 'paper') {
                    interaction.channel.send('You Win!')
                    
                }

                
                
            } else if (cpu === 'paper') {

                const paperEmbed = new MessageEmbed()
                .setTitle('Chibi Bot played Paper')
                .setImage('https://i.imgur.com/NHz26sy.png')
                .setColor('#000000')

                interaction.channel.send({embeds: [paperEmbed]})
  

                if (user === 'rock') {
                    interaction.channel.send('Chibi Bot Wins!') 
                    
                }
                if (user === 'scissors') {
                    interaction.channel.send('You Win!')
                    
                }
                if (user === 'paper') interaction.channel.send('Its a Tie')     


            } else if (cpu === 'scissors') {

                 const scissorsEmbed = new MessageEmbed()
                .setTitle('Chibi Bot played Scissors')
                .setImage('https://i.imgur.com/eSirMpe.png')
                .setColor('#000000')

                interaction.channel.send({embeds: [scissorsEmbed]})

                

                if (user === 'rock') {
                    interaction.channel.send('You Win!') 
                    
                }
                if (user === 'scissors') interaction.channel.send('Its a Tie')
                if (user === 'paper') {
                    interaction.channel.send('Chibi Bot Wins!') 
                    
                }

                
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

    
