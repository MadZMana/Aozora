const { SlashCommandBuilder, REST, Routes } = require('discord.js')
require('dotenv').config()

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);
const commands = [
	new SlashCommandBuilder()
	.setName("ttdl")
	.setDescription("Kirim video dari TikTok")
	.addStringOption(option => option.setName("url").setDescription("Link VT").setRequired(true))
	.toJSON(),
	new SlashCommandBuilder()
	.setName("igdl")
	.setDescription("Kirim video dari Instagram")
	.addStringOption(option => option.setName("url").setDescription("Link Reels").setRequired(true))
	.toJSON(),
	new SlashCommandBuilder()
	.setName("disconnect")
	.setDescription("Disconnect user dari Voice Channel")
	.addStringOption(option => option.setName("target").setDescription("Username user").setRequired(true))
	.toJSON()
]

rest.put(
	Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), { body: commands }
).then(() => console.log("Slash commands berhasil didaftarkan")).catch(console.error)
