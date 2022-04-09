module.exports = {
    name: 'trivia',
    description: 'Gives a random piece of trivia',
    
    
    execute(interaction, player) {

        try {
        const rand = Math.floor((Math.random() * 10))

            let fact
            switch(rand) {
                case 0: fact = "The shortest scientific -ology word is 'oology.'"
                break
                case 1: fact = "The word 'muscle' comes from a Latin term meaning 'little mouse.'"
                break
                case 2: fact = "Tic Tac mints are named after the sound their container makes."
                break
                case 3: fact = "Peanuts can be used to make dynamite."
                break
                case 4: fact = "The largest volcano in the solar system is three times taller than Mount Everest."
                break
                case 5: fact = "Armadillos swallow air to become buoyant when they swim."
                break
                case 6: fact = "Domino's Japan trained reindeer to deliver pizza."
                break
                case 7: fact = "The world record for the tallest stack of doughnuts totaled more than 3,000."
                break
                case 8: fact = "Only two national flags have the color purple on them."
                break
                case 9: fact = "Mount Rushmore cost less than $1 million."
                break
                
                default: fact = "error"
                break
                
            }

      interaction.reply(`Fun Fact: ${fact}`)
    
  }catch (err) {

  }
}
}
  