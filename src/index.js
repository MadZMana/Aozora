require('dotenv').config();
const { Client, IntentsBitField, AttachmentBuilder, Events } = require('discord.js');
const ttDownloader = require('./tiktokscraper.js')
const igDownloader = require('./igscraper.js')

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildMembers,
    ]
})

client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`)
})

client.on(Events.InteractionCreate, async interaction => {
	if(!interaction.isChatInputCommand()) return;
	
	if(interaction.commandName == "ttdl") {
		const url = interaction.options.getString("url")
		await interaction.deferReply()

		try {
			const hasil = await ttDownloader(url)
			if (hasil) {
				const attachment = new AttachmentBuilder(hasil, { name: 'tiktok.mp4' })
				await interaction.editReply({ files: [attachment] })
			} else {
				await interaction.editReply("Gagal mengirim video")
			}
		} catch(err) {
			console.error(err)
			await interaction.editReply("Terjadi error")
		}
	}

	if(interaction.commandName == "igdl") {
		const url = interaction.options.getString("url")
		await interaction.deferReply()

		try {
			const hasil = await igDownloader(url)
			if (hasil) {
				const attachment = new AttachmentBuilder(hasil, { name: 'instagram.mp4' })
				await interaction.editReply({ files: [attachment] })
			} else {
				await interaction.editReply("Gagal mengirim video")
			}
		} catch(err) {
			console.error(err)
			await interaction.editReply("Terjadi error")
		}
	}
})

client.login(process.env.TOKEN)
