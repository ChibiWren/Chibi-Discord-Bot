//TODO make fortune into an embed with the lucky item

module.exports = {
    name: 'fortune',
    description: 'Tells the user their fortune.',
    options: [{
        name: 'wish',
        type: 3, //string
        description: 'Type your wish here.',
        required: false,
    },],

    execute (interaction) {
        try {
            const rand = Math.floor((Math.random() * 10))
    
                let fortune
                switch(rand) {
                    
                    case 0: fortune = "Whenever you draw your blade, it shall lead you towards victory. The shine of your blade as it leaves its sheath will also inspire those around you.\n"
                    + "Today, a single shot from your bow will shoot down an airborne prey, and a single strike against a guard will hit their weak spot.\n"
                    + "If you have no target, try looking around. You might find a surprise waiting for you.\n"
                    + "Also, dont forget to share your good luck with your less-fortunate companions.\n"
                    break
                    case 1: fortune = "Today, what was lost will be found.\n"
                    + "Efforts you thought were made in vain will bear fruit.\n"
                    + "A friendship you once thought broken will be mended.\n"
                    + "Something you had long forgotten will come to mind.\n"
                    + "Nothing in this world is beyond redemption.\n"
                    + "Today is the day to reclaim what was lost.\n"
                    break
                    case 2: fortune = "Today the wind will pick up, and you will succeed effortlessly in whatever you do.\n"
                    + "The people around you will be exceptionally content, and no conflicts will occur.\n"
                    + "You will dine on delicacies that you have wished for but not eaten in a long time.\n"
                    + "In your work and in your travels, everything will go smoothly.\n"
                    + "Seize the day and advance with zeal.\n"
                    break
                    case 3: fortune = "A day like any other. A routine that the body and mind are accustomed to.\n"
                    + "An item will appear to replace something you lost, which will bring you great happiness.\n"
                    + "Relations with the acquaintances you see most frequently will improve, and some may even become the best of friends.\n"
                    + "Even the most ordinary of days can become a treasured memory.\n"
                    break
                    case 4: fortune = "A day when nothing especially noteworthy happens — and yet, you cannot help but feel happy.\n"
                    + "You will find something you thought was long gone in the nooks and crannies you never noticed before.\n"
                    + "Food will taste fresher than usual, and the scenery ahead will appear brighter than ever.\n"
                    + "The world is full of new and wonderful things.\n"
                    break
                    case 5: fortune = "Days when clouds drift through the sky bring a feeling of great contentment.\n"
                    + "Work will go smoothly, and good ideas will come to you, even during your noon nap.\n"
                    + "Suddenly, you will find brand new common ground with old friends...\n"
                    + "Every day will be positive and filled with cheer.\n"
                    break
                    case 6:
                    case 7: 
                    case 8: fortune = "The clouds hang low in the sky, and they will build up further still.\n"
                    + "Sooner or later, a thunderstorm will suddenly come crashing down from above.\n"
                    + "Yet the rainbow awaits at the end of the storm.\n"
                    + "Stick to tried and tested ways and maintain peace. Act rashly, and you may struggle to succeed.\n"
                    break
                    case 9: fortune = "A day spent feeling empty inside can lead to a profound sense of powerlessness.\n"
                    + "The problems you face are defying your attempts to solve them. This futile endeavor is wearing you down and making you ill.\n"
                    + "But do not be discouraged that everything is going downhill.\n"
                    + "Survive this difficult period and one day you will achieve something great.\n"
                    break
                }


                interaction.reply(` ${interaction.user}, Your Fortune is... \n\n${fortune}`)

              
            }catch (err) {
          
            }
    }
}