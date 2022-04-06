//! NOT WORKING

const discordTTS=require("discord-tts");
const {AudioPlayer, createAudioResource, StreamType, entersState, VoiceConnectionStatus, joinVoiceChannel} = require("@discordjs/voice");

module.exports = {
    name: "text-to-speech",
    description: "Takes a user input and speaks the message.",
    options:[{
        name: 'text',
        type: 3, //string
        description: 'Type your sentence here',
        required: true,

    }],

     async execute(interaction) {

        let voiceConnection;
        let audioPlayer=new AudioPlayer();
        const msg = interaction.options.get('text').value


        //
        try {
        const stream=discordTTS.getVoiceStream("Hello World");
        const audioResource=createAudioResource(stream, {inputType: StreamType.Arbitrary, inlineVolume:true});
        if(!voiceConnection || voiceConnection?.status===VoiceConnectionStatus.Disconnected){
            voiceConnection = joinVoiceChannel({
                channelId: interaction.member.voice.channelId,
                guildId: interaction.guildId,
                adapterCreator: interaction.guild.voiceAdapterCreator,
            });
            voiceConnection= await entersState(voiceConnection, VoiceConnectionStatus.Connecting, 5_000);
        }
        
        if(voiceConnection.status===VoiceConnectionStatus.Connected){
            voiceConnection.subscribe(audioPlayer);
            audioPlayer.play(audioResource);

        }

        interaction.reply(`Test: ${msg}`)
    } catch (err) {
        console.log(error);
        interaction.followUp({
          content: 'There was an error trying to execute that command: ' + error.message,

        })



        
    }




     }
    }
