const { executionAsyncResource } = require("async_hooks");
const { MessageEmbed, DiscordAPIError, Channel } = require("discord.js");
let moment = require("moment");

module.exports = {
    name: "whois",
    description: "whois embed",
    execute(message, args) {
    var Member = message.mentions.members.first() || message.member;
    let whois = new MessageEmbed() // Creating 
        .setColor(15002111) // Color 
        .setTitle("Profile Information:") // Titling
        .addField("Discord Name:", require("discord.js").Util.escapeMarkdown(Member.user.tag)) // Discord @
        .addField("ID:", Member.user.id) // ID fetching
        .addField("Account Created:", `${moment.utc(Member.user.createdTimestamp).format("ddd, MMM Do, YYYY h:mm:ss a")} (${moment.utc(Member.user.createdTimestamp).fromNow()})`)
        .addField("Joined Server:", `${moment.utc(Member.joinedTimestamp).format("ddd, MMM Do, YYYY h:mm:ss a")} (${moment.utc(Member.joinedTimestamp).fromNow()})`) // Date formatting.
        .setThumbnail(Member.user.displayAvatarURL({
            dynamic: true,
            size: 2048,
            format: 'png'
            })) // Restricting size of image.
        .setFooter("Powered by [Server Name]", [Imagine URL]); // You will need to add the server name and image manually.
    return message.channel.send(whois); // Send to the discord channel.
    }
}
