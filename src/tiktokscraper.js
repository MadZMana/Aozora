const Tiktok = require("@tobyg74/tiktok-api-dl")

let ttDownloader = async function(url) {
	try {
		let result = await Tiktok.Downloader(url, { version: "v2" })
		let video = result.result.video.playAddr[0]
		console.log("Video Tiktok berhasil didapat!")
		console.log("Mengirim ke user...")
		return video
	} catch (err) {
		console.error("Error: ", err)
	}
}

module.exports = ttDownloader
