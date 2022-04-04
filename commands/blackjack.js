const { execute } = require("./uwu");

module.exports = {
    name: 'blackjack',
    description: 'Play a round of Blackjack against the bot',
    options: [{
        name: 'hand',
        type: 3,
        description: 'Choose to hit or stand',
        required: true
    }],
    execute
}