import dotenv from "dotenv"
dotenv.config()
import fetch from "node-fetch"

const getChannelMessages = async(channel_id) => {
    const url = `https://discord.com/api/v8/channels/${channel_id}/messages`

    const data = await fetch(url, {
        method: 'GET',
        headers: {
            "authorization": process.env.DISCORD_AUTH
        }
    })

    return await data.json()
}

export {getChannelMessages}