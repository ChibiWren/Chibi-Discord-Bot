module.exports = {
    name: 'hello',
    description: "Sends a greeting to the user",
    options: [
        /*{
          name: 'user',
          type: 6, //USER TYPE
          description: 'The user you want to get info about',
          required: true,
        },*/
    ],


    async execute(interaction) {
        interaction.reply({
          content: `Greetings!`,
          ephemeral: false,
        });
      },
      //, ${user.username}
}