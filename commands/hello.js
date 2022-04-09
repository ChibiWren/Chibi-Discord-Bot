module.exports = {
    name: 'hello',
    description: "Sends a greeting to the user",
    options: [
      
    ],


    async execute(interaction, player) {
        interaction.reply({
          content: `Hello, World!`
        });
      },
      //, ${user.username}
}