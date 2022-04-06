module.exports = {
    name: 'hello',
    description: "Sends a greeting to the user",
    options: [
      
    ],


    async execute(interaction) {
        interaction.reply({
          content: `Hello, World!`,
          ephemeral: false,
        });
      },
      //, ${user.username}
}