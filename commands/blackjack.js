//TODO figure out how to wait for multiple inputs from user
module.exports = {
    name: 'blackjack',
    description: 'Play a round of Blackjack against the bot',
    options: [{
        name: 'hand',
        type: 3,
        description: 'Choose to hit or stand',
        required: true
    }],
    execute (interaction) {
        try{
            //array of possible cards
            const cards = ['1','2','3','4','5','6','7','8','9','10','J','Q','K','A']
           
           
            //players hand
            const userCard1 = cards[Math.floor(Math.random() * cards.length)]
            const userCard2 = cards[Math.floor(Math.random() * cards.length)]
            


            interaction.channel.send(`Your hand is ${userCard1} & ${userCard2}`)

            const action = interaction.options.get('hand').value

            if (action.toLowerCase() === 'hit') {
                const userCard3 = cards[Math.floor(Math.random() * cards.length)]
                interaction.channel.send(`You were dealt a ${userCard3}`)
                const userHand = cardNum(userCard1)+cardNum(userCard2)+cardNum(userCard3)
                if (userHand > 21) {
                    lose()
                }
            } else {
                const userHand = cardNum(userCard1)+cardNum(userCard2)
            }

            

            //Code for the cpu hand
            const cpuCard1 = cardNum(cards[Math.floor(Math.random() * cards.length)])
            const cpuCard2 = cardNum(cards[Math.floor(Math.random() * cards.length)])

            
            //converts the card to a number
            function cardNum(card) {
                let newCard
                switch(card) {
                    case '1': newCard = 1
                    break
                    case '2': newCard = 2
                    break
                    case '3': newCard = 3
                    break 
                    case '4': newCard = 4
                    break
                    case '5' :newCard =  5
                    break
                    case '6' :newCard =  6
                    break
                    case '7' :newCard =  7
                    break
                    case '8' :newCard =  8
                    break
                    case '9' :newCard =  9
                    break
                    case '10':newCard =  10
                    break
                    case 'J' :newCard =  10
                    break
                    case 'Q' :newCard =  10
                    break
                    case 'K' :newCard =  10
                    break
                    case 'A' :newCard =  11
                    break
                    default : newCard = 0
                    break

                }
                return newCard
            }


            const cpuHand = cpuCard1 + cpuCard2

            if (cpuHand < 21 || userHand > cpuHand) {
                win()
            } else {
                lose()
            }


            //player wins
            function win() {
                interaction.reply("YOU WIN!")
            }

            //player loses
            function lose() {
                interaction.reply("YOU LOSE")
            }


        } catch (err) {
            console.log(error)
            interaction.followUp(
              'There was an error trying to execute that command: ' + error.message,
            )}
    }
    
}