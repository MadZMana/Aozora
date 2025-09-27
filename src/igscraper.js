const { instagramGetUrl } = require('instagram-url-direct')

let igDownloader = async function(url) {
	try {
		let result = await instagramGetUrl(url)
		let video = result.media_details[0].url
		console.log("Video IG berhasil didapat!")
		console.log("Mengirim ke user...")
		return video
	} catch (err) {
		console.error("Error: ", err)
	}
}

module.exports = igDownloader
