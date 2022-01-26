import dotenv from "dotenv"
dotenv.config()
import fetch from "node-fetch"
import process from 'process';
import {Parser} from 'json2csv';
import { filter } from "lodash";
import fs from 'fs'

const scrapMessages = async(channel_id) => {
    const url = `https://discord.com/api/v8/channels/${channel_id}/messages`

    const data = await fetch(url, {
        method: 'GET',
        headers: {
            "authorization": process.env.DISCORD_AUTH
        }
    })

    return await data.json()
}
const exportMessages = async (channel_id) => {
    const data = await getChannelMessages(channel_id);
    const filtered_data = data.map((val, _index) => {
        return {
            timestamp: val.timestamp, 
            username: val.author.username,
            content: val.content
        }
    })
    const fields = ['timestamp', 'username', 'content'];
    const opts = { fields };
    try {
        const csv = parse(filtered_data, opts);
        fs.writeFile('data.csv', csv)
        console.log(csv);
      } catch (err) {
        console.error(err);
      }
    return filtered_data
}

if (!process.env.DISCORD_AUTH) {
    console.log("No DISCORD_AUTH found in .env")
} else {
    const channel_id = process.argv[2] || NaN // This takes 3rd element from process.argv array, which corresponds to arg in "node file.js arg" line.
    const data = (process.argv.includes("--export")) ? exportMessages(channel_id) : scrapMessages(channel_id)
    console.log("Data: " + data)
}